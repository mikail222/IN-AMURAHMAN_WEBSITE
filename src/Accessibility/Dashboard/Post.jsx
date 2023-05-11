import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { db, storage } from "../../firebaseconfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Post = () => {
  const [photoFileUpload, setPhotoFileUpload] = useState(null);
  const [trackupload, setTrackUpload] = useState(null);
  const [posts, setPosts] = useState([]);
  const [adminPost, setAdminPost] = useState([]);
  const [comment, setComment] = useState([]);

  const postRef = collection(db, "Post");
  console.log(adminPost);
  console.log(posts);
  const handleChange = (e) => {
    const newPost = {
      ...photoFileUpload,
      [e.target.name]: e.target.value,
      day: new Date().toDateString(),
    };
    setPosts({ ...posts, ...newPost });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(postRef, {
      ...posts,
    });
  };
  const CommentRef = collection(db, "User_Comment");
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postRef);
      setAdminPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
    const getComment = async () => {
      const comment_data = await getDocs(CommentRef);
      setComment(
        comment_data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getComment();
  }, []);
  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + photoFileUpload.name;
      const storageRef = ref(storage, "Post_Image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, photoFileUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setTrackUpload(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },

        (error) => {
          console.log(error);
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPosts({ ...posts, photo: downloadURL });
          });
        }
      );
    };
    photoFileUpload && uploadfile();
  }, [photoFileUpload]);
  return (
    <div className="postForm">
      {adminPost.map(({ text, photo, day, i }) => (
        <div key={i} className="info">
          <img src={photo} alt="" className="postPhotos" />
          <p className="info_text">{text}</p>
          <p className="date">{day}</p>
        </div>
      ))}
      {comment.map(({ text, photo, day, name, profilePics, i }) => (
        <div key={i} className="comment_info">
          {profilePics && (
            <img src={profilePics} alt="" className="Authoricon" />
          )}{" "}
          <p>{name}</p>
          {photo && <img src={photo} alt="" className="postPhotos" />}
          <p className="info_text">{text}</p>
          <p className="date">{day}</p>
        </div>
      ))}
      <form className="postingform" onChange={(e) => handleChange(e)}>
        <input
          type="file"
          id="fileInput"
          name="file"
          className="fileInput"
          onChange={(e) => setPhotoFileUpload(e.target.files[0])}
        />
        <textarea
          name="text"
          id="post"
          cols="25"
          rows="6"
          placeholder="write your post message...."
        ></textarea>
        <div>
          <label htmlFor="fileInput" className="postBtn">
            {trackupload !== null && trackupload < 100 ? (
              <i> loading...</i>
            ) : (
              "Add photos"
            )}
          </label>
          <BiSend
            className="send"
            onClick={(e) => handleSubmit(e)}
            title="send"
          />
        </div>
      </form>
    </div>
  );
};

export default Post;
