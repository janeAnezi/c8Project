import React, { useContext, useEffect, useReducer, useState } from "react";
import avatar from "../../assets/images/6596121.png";
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
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PostCard = ({ id, name, logo, email, text, image, timestamp }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const [state, dispatch] = useReducer(PostsReducer, postsStates);
  const likesRef = doc(collection(db, "posts", id, "likes"));
  const likesCollection = collection(db, "posts", id, "likes");
  const { ADD_LIKE, HANDLE_ERROR } = postActions;
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen((prevOpen) => !prevOpen); // Toggle the open state
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const q = query(likesCollection, where("id", "==", currentUser?.uid));
    const querySnapshot = await getDocs(q);
    const likesDocId = await querySnapshot?.docs[0]?.id;
    try {
      if (likesDocId !== undefined) {
        const deleteId = doc(db, "posts", id, "likes", likesDocId);
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

  const handleNavigateToProfile = () => {
    console.log("Navigating to user profile page");
    history.push(/profile/);
  };

  return (
    <div className="mb-4">
      <div className="flex flex-col border border-white-300 shadow-md py-4 bg-white rounded-t-3xl px-5">
        <div className="flex items-center pb-4">
          <Link to="/profile" onClick={handleNavigateToProfile}>
            <div className="flex -space-x-1 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={logo || avatar}
                alt="image"
              />
            </div>
          </Link>

          <div className="flex justify-between w-full">
            <div>
              <p className="ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                {name}
              </p>
              <p className="ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
                {email}
              </p>
            </div>

            <p className="mr-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              {timestamp}
            </p>
          </div>
        </div>
        <div>
          <p className=" pb-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            {text}
          </p>
          {image && (
            <img className="mt-5  w-full" src={image} alt="postImage"></img>
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
