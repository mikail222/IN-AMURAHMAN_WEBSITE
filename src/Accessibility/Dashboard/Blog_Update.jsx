import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db, storage } from "../../firebaseconfig";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import irehv from "../../asset/irehv-low-resolution-logo-color-on-transparent-background.png";
import Flies from "../../Pest/Flies";

const Blog_Update = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [list, setList] = useState(false);
  const [dependedcy, setDependency] = useState(false);

  const [trackupload, setTrackUpload] = useState(null);
  const [trackWriterupload, setTrackWriterUpload] = useState(null);
  const [blogFileUpload, setBlogFileUpload] = useState(null);
  const [writerFileUpload, setWriterFileUpload] = useState(null);
  const clearTxt = useRef();

  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + blogFileUpload.name;
      const storageRef = ref(storage, "blog_Image/" + identity);

      const uploadTask = uploadBytesResumable(storageRef, blogFileUpload);

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
            setBlogPost({ ...blogPost, img: downloadURL });
          });
        }
      );
    };
    blogFileUpload && uploadfile();
  }, [blogFileUpload]);
  useEffect(() => {
    const writerUploadfile = () => {
      const writerIdentity = new Date().getTime() + writerFileUpload.name;

      const writerStorageRef = ref(
        storage,
        "blogWriter_Image/" + writerIdentity
      );
      const writerUploadTask = uploadBytesResumable(
        writerStorageRef,
        writerFileUpload
      );

      writerUploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressing =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progressing + "% done");
          setTrackWriterUpload(progressing);
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
          getDownloadURL(writerUploadTask.snapshot.ref).then((downloadURL) => {
            setBlogPost({ ...blogPost, writer_img: downloadURL });
          });
        }
      );
    };
    writerFileUpload && writerUploadfile();
  }, [writerFileUpload]);

  const handleChange = (e) => {
    const newBlog = {
      ...blogFileUpload,
      ...writerFileUpload,
      [e.target.name]: e.target.value,
    };
    setBlogPost({ ...blogPost, ...newBlog });
    e.target.reset();
  };

  const collBlogRef = collection(db, "Blogs");

  const update_Blog = async (e) => {
    e.preventDefault();
    await addDoc(collBlogRef, {
      ...blogPost,
      day: new Date().toDateString(),
      timesStamp: new Date(),
    });
    alert("Blog successfully added");
    clearTxt.current.reset();
    setWriterFileUpload("");
    setBlogFileUpload("");
  };
  console.log(blogPost);
  return (
    <div>
      <div className="productUpdate">
        <form
          className="blogUpdateForm"
          ref={clearTxt}
          onChange={(e) => handleChange(e)}
        >
          <img src={irehv} alt="" className="irehvupdateform" />
          <h4 className="updateheader">Blogs Post Form</h4>
          <div className="blogFileClass">
            <div>
              {blogFileUpload ? (
                <img src={blogPost.img} alt="" className="fileImg  " />
              ) : (
                <label htmlFor="fileInput" className="fileLabel ">
                  {trackupload !== null && trackupload < 100 ? (
                    <i> loading...!</i>
                  ) : (
                    <MdOutlineDriveFolderUpload className="fileIcon " />
                  )}
                  <p> Blog image:</p>
                </label>
              )}

              <input
                type="file"
                id="fileInput"
                name="file"
                className="fileInput"
                onChange={(e) => setBlogFileUpload(e.target.files[0])}
              />
            </div>
            <div>
              {writerFileUpload ? (
                <img src={blogPost.writer_img} alt="" className="fileImg  " />
              ) : (
                <label htmlFor="writerfileInput" className="fileLabel ">
                  {trackWriterupload !== null && trackWriterupload < 100 ? (
                    <i> loading...!</i>
                  ) : (
                    <MdOutlineDriveFolderUpload className="fileIcon " />
                  )}
                  <p> Writer image:</p>
                </label>
              )}
              <input
                type="file"
                id="writerfileInput"
                name="writerfile"
                className="fileInput"
                onChange={(e) => setWriterFileUpload(e.target.files[0])}
              />
            </div>
          </div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Blog title" name="title" required />
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Blog subject"
            name="subject"
            required
          />
          <input
            type="text"
            placeholder="Blog category"
            name="category"
            required
          />
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="Writer's Name"
            name="writer_name"
            required
          />
          <label htmlFor=""></label>
          <textarea type="text" placeholder="Content" name="content" required />
          <button type="button" onClick={update_Blog} className="button">
            <p>Send Post</p>
          </button>{" "}
          {list ? (
            <p onClick={() => setList(false)} className="viewList">
              close Blog list
            </p>
          ) : (
            <p className="viewList" onClick={() => setList(true)}>
              view Blog list
            </p>
          )}
        </form>

        <div className="productSidebg">
          <div>
            <h3>"Attention is the new currency"</h3>
            <p>
              The more effortless the writing looks, the more effort the writer
              actually put into the process.
            </p>
          </div>
        </div>
      </div>
      {/* {list && (
        <Product_Details product_detail={product_detail} count={count} />
      )} */}
    </div>
  );
};

export default Blog_Update;
