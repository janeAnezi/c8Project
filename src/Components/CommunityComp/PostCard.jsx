// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useReducer, useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import like from "../../assets/images/love.png";
import comment from "../../assets/images/comment.png";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  PostsReducer,
  postActions,
  postsStates,
} from "../../Contexts/PostReducer";
import {
  doc,
  setDoc,
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";

const PostCard = ({
  id,
  logo,
  uid,
  name,
  email,
  text,
  image,
  timestamp,
  user,
}) => {
  const { currentUser, userData } = useContext(AuthContext);
  const [state, dispatch] = useReducer(PostsReducer, postsStates);
  const likesRef = doc(collection(db, "posts", id, "likes"));
  const likesCollection = collection(db, "posts", id, "likes");
  const { ADD_LIKE, HANDLE_ERROR } = postActions;
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const q = query(likesCollection, where("id", "==", currentUser?.uid));
    const querySnapshot = await getDocs(q);
    const likesDocId = await querySnapshot?.docs[0]?.id;
    try {
      if (likesDocId !== undefined) {
        const deleteId = doc(db, "posts", id, "likes", likesDocId);
        // eslint-disable-next-line no-undef
        await deleteDoc(deleteId);
      } else {
        await setDoc(likesRef, {
          id: currentUser?.uid,
        });
      }
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getLikes = async () => {
      try {
        const q = collection(db, "posts", id, "likes");
        await onSnapshot(q, (doc) => {
          dispatch({
            type: ADD_LIKE,
            likes: doc.docs.map((item) => item.data()),
          });
        });
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    };
    const getComments = async () => {
      try {
        const commentsQuery = collection(db, "posts", id, "comments");
        await onSnapshot(commentsQuery, (doc) => {
          setComments(doc.docs.map((item) => item.data()));
        });
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    };
    getLikes();
    getComments();
  }, [ADD_LIKE, HANDLE_ERROR, id]);

  const commentCount = comments.length;

  const handleImageClick = () => {
    // Redirect to the user's profile page when email is clicked
    window.location.href = `/profile/${user.name}`;
  };

  return (
    <div className="mb-4">
      <div className="flex flex-col border border-white-300 shadow-md py-4 bg-white rounded-t-3xl">
        <div className="flex items-center pb-4 ml-2">
          <div className="flex -space-x-1 overflow-hidden">
            <Link onChangeCapture={handleImageClick}>
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={logo || avatar}
                alt="image"
              />
            </Link>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p className="ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                {name}
              </p>
              <p className="ml-4 mt-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                {email}
              </p>
            </div>
            <p className="mr-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              {timestamp}
            </p>
          </div>
        </div>
        <div>
          <p className="ml-4 pb-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            {text}
          </p>
          {image && (
            <img
              className="w-full h-auto rounded-xl"
              src={image}
              alt="postImage"
            ></img>
          )}
        </div>
        <div className="flex justify-around items-center pt-4">
          <button
            className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100"
            onClick={handleLike}
          >
            <img className="h-8" src={like} alt=""></img>
            <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
              Love {""}
            </p>
            ({state.likes?.length > 0 && state?.likes?.length})
          </button>
          <div
            className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-10"
            onClick={handleOpen}
          >
            <div className="flex items-center cursor-pointer">
              <img className="h-8" src={comment} alt="comment"></img>
              <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
                Comments ({commentCount})
              </p>
            </div>
          </div>
        </div>
      </div>
      {open && <CommentSection postId={id}></CommentSection>}
    </div>
  );
};
export default PostCard;
