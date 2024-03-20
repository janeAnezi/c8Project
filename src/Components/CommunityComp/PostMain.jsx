// eslint-disable-next-line no-unused-vars
import React, {
  useState,
  useRef,
  useContext,
  useReducer,
  useEffect,
} from "react";
import avatar from "../../assets/images/avatar.jpg";
import addImage from "../../assets/images/addImage.png";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
// import { db } from "../../firebase/firebase";
import {
  PostsReducer,
  postActions,
  postsStates,
} from "../../Contexts/PostReducer";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import PostCard from "./PostCard";

const PostMain = () => {
  // Define and populate filteredMealNames
  const { user, userData } = useContext(AuthContext);
  const text = useRef("");
  const scrollRef = useRef("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const collectionRef = collection(db, "posts");
  const postRef = doc(collection(db, "posts"));
  const document = postRef.id;
  const [state, dispatch] = useReducer(PostsReducer, postsStates);
  const { SUBMIT_POST, HANDLE_ERROR } = postActions;
  const [progressBar, setProgressBar] = useState(0);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (text.current.value !== "") {
      try {
        const name = user?.displayName || userData?.name || "Unknown User";
        const email = user?.email || userData?.email || "unknown@example.com";

        await setDoc(postRef, {
          documentId: document,
          uid: user?.uid || userData?.uid,
          logo: user?.photoURL,
          name: name,
          email: email,
          text: text.current.value,
          image: image,
          timestamp: serverTimestamp(),
        });
        text.current.value = "";
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    } else {
      dispatch({ type: HANDLE_ERROR });
    }
  };

  const storage = getStorage();

  const metadata = {
    contentType: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ],
  };

  const submitImage = async () => {
    const fileType = metadata.contentType.includes(file["type"]);
    if (!file) return;
    if (fileType) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(
          storageRef,
          file,
          metadata.contentType
        );
        await uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgressBar(progress);
          },
          (error) => {
            alert(error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                setImage(downloadURL);
              }
            );
          }
        );
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    const postData = async () => {
      const q = query(collectionRef, orderBy("timestamp", "asc"));
      await onSnapshot(q, (doc) => {
        dispatch({
          type: SUBMIT_POST,
          posts: doc?.docs?.map((item) => item?.data()),
        });
        scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
        setImage(null);
        setFile(null);
        setProgressBar(0);
      });
    };
    return () => postData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SUBMIT_POST]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col py-4 w-full bg-[#f4f4f4] rounded-5xl shadow-lg">
        <div className="flex items-center pb-4 pl-4 w-full">
          <div className="flex -space-x-1 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src={avatar || user?.photoURL}
              alt="image"
            />
          </div>
          <form className="w-full">
            <div className="flex justify-between items-center">
              <div className="w-full ml-4">
                <input
                  type="text"
                  name="text"
                  placeholder={`Whats on your mind ${
                    user?.displayName?.split(" ")[0] ||
                    userData?.name?.charAt(0).toUpperCase() +
                      userData?.name?.slice(1)
                  }`}
                  className="outline-none w-full bg-[#f4f4f4] rounded-md"
                  ref={text}
                ></input>
              </div>
              <div className="mx-4">
                {image && (
                  <img
                    className="h-24 rounded-xl"
                    src={image}
                    alt="previewImage"
                  ></img>
                )}
              </div>
            </div>
          </form>
        </div>
        <span
          style={{ width: `${progressBar}%` }}
          className="bg-[#101010] py-1 rounded-md"
        ></span>
        <div className="flex justify-between pt-10 bottom-0">
          <div className="pl-5">
            <button
              className="bg-[#4248fb]"
              type="submit"
              onClick={handleSubmitPost}
            >
              Post
            </button>
          </div>
          <div className="flex items-center">
            <label
              htmlFor="addImage"
              className="cursor-pointer flex items-center"
            >
              <img className="h-10 mr-4" src={addImage} alt="addImage"></img>
              <input
                id="addImage"
                type="file"
                style={{ display: "none" }}
                onChange={handleUpload}
              ></input>
            </label>
            {file && (
              <button className="text" onClick={submitImage}>
                Upload
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 w-full">
        {state?.error ? (
          <div className="flex justify-center items-center">
            <alert color="red">
              Something went wrong refresh and try again...
            </alert>
          </div>
        ) : (
          <div>
            {state?.posts?.length > 0 &&
              state?.posts?.map((post, index) => {
                const timestamp = new Date(post?.timestamp?.toDate());

                // Calculate the difference between now and the post timestamp
                const now = new Date();
                const diff = now - timestamp;

                // Convert milliseconds to seconds
                const seconds = Math.floor(diff / 1000);

                // Calculate years, months, days, hours, and minutes
                const years = Math.floor(seconds / (365 * 24 * 60 * 60));
                const months = Math.floor(
                  (seconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)
                );
                const days = Math.floor(
                  (seconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)
                );
                const hours = Math.floor(
                  (seconds % (24 * 60 * 60)) / (60 * 60)
                );
                const minutes = Math.floor((seconds % (60 * 60)) / 60);

                // Construct the timestamp string
                let timestampString = "";
                if (years > 0) {
                  timestampString += `${years}y `;
                }
                if (months > 0) {
                  timestampString += `${months}mo `;
                }
                if (days > 0) {
                  timestampString += `${days}d `;
                }
                if (hours > 0) {
                  timestampString += `${hours}h `;
                }
                if (minutes > 0) {
                  timestampString += `${minutes}m `;
                }

                return (
                  <PostCard
                    key={index}
                    logo={post?.logo}
                    id={post?.documentId}
                    uid={post?.uid}
                    name={post?.name}
                    email={post?.email}
                    image={post?.image}
                    text={post?.text}
                    timestamp={timestampString.trim()} // Display the formatted timestamp
                  ></PostCard>
                );
              })}
          </div>

          // <div>
          //   {state?.posts?.length > 0 &&
          //     state?.posts?.map((post, index) => {
          //       return (
          //         <PostCard
          //           key={index}
          //           logo={post?.logo}
          //           id={post?.documentId}
          //           uid={post?.uid}
          //           name={post?.name}
          //           email={post?.email}
          //           image={post?.image}
          //           text={post?.text}
          //           timestamp={new Date(
          //             post?.timestamp?.toDate()
          //           )?.toUTCString()}
          //         ></PostCard>
          //       );
          //     })}
          // </div>
        )}
      </div>
      <div ref={scrollRef}>{/* refference for later */}</div>
    </div>
  );
};

export default PostMain;
