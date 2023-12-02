import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db, storage } from "../../firebaseconfig";
import {
  MdOutlineBookmarkAdd,
  MdOutlineDriveFolderUpload,
  MdRemoveRedEye,
} from "react-icons/md";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import irehv from "../../asset/irehv-low-resolution-logo-color-on-transparent-background.png";
import Blog from "../../Blog";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";

const Blog_Update = () => {
  const intialValue = {
    title: "",
    subject: "",
    category: "",
    writer_name: "",
    content: "",
  };
  const [blogPost, setBlogPost] = useState(intialValue);
  const [list, setList] = useState(false);
  const [view, setView] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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
    const unsub = onSnapshot(
      collection(db, "Blogs"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

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
    const { name, value } = e.target;
    setBlogPost({
      ...blogPost,
      ...blogFileUpload,
      ...writerFileUpload,
      [name]: value,
      day: new Date().toDateString(),
      time: serverTimestamp(),
    });
  };
  const collBlogRef = collection(db, "Blogs");

  const update_Blog = async (e) => {
    e.preventDefault();
    setFormError(validate(blogPost));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (
        window.confirm(
          "Please verify your details and the content of your Booking for any error or omission"
        )
      ) {
        await addDoc(collBlogRef, blogPost);
        alert("Blog successfully added");
      }
    }
    clearTxt.current.reset();
    setWriterFileUpload("");
    setBlogFileUpload("");
  };
  const handleDeleteBlog = async (id) => {
    const checkPersonsName = blogs.find((blog) => blog.id === id);
    try {
      if (
        window.confirm(
          `are sure you want  to  delete  ${checkPersonsName.title} ?`
        )
      ) {
        await deleteDoc(doc(db, "Blogs", id));
        setBlogs(blogs.filter(({ id }) => id !== id));
      }
    } catch (err) {
      setTimeout(() => {
        alert(err.message);
      }, 5000);
    }
  };
  const validate = (values) => {
    const error = {};
    if (!values.title) {
      error.title = "Title is required";
    }
    if (!values.content) {
      error.content = " Content is required";
    }

    if (!values.subject) {
      error.subject = "subject is required";
    }

    if (!values.category) {
      error.category = "Category is required";
    }
    if (!values.writer_name) {
      error.writer_name = "Writer's name is required";
    }
    return error;
  };
  // console.log(blogPost.map(({ title }) => title));
  return (
    <div>
      <div className="productUpdate">
        <form
          className="blogUpdateForm"
          ref={clearTxt}
          onSubmit={(e) => update_Blog(e)}
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
          <label htmlFor="">{formError && formError.title}</label>
          <input
            type="text"
            placeholder="Blog title"
            name="title"
            value={blogPost.title}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="">{formError && formError.subject}</label>
          <input
            type="text"
            placeholder="Blog subject"
            name="subject"
            value={blogPost.subject}
            onChange={(e) => handleChange(e)}
          />{" "}
          <label htmlFor="">{formError && formError.category}</label>
          <input
            type="text"
            placeholder="Blog category"
            name="category"
            value={blogPost.category}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="">{formError && formError.writer_name}</label>
          <input
            type="text"
            placeholder="Writer's Name"
            name="writer_name"
            value={blogPost.writer_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="">{formError && formError.content}</label>
          <textarea
            type="text"
            placeholder="Content"
            name="content"
            value={blogPost.content}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="button">
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
      <div className="allBlogParentContainer">
        <div className="allBlogContainer">
          {!blogPost && <h3>please check your internet connection</h3>}
          {list &&
            blogs.map(
              ({
                img,
                writer_img,
                writer_name,
                subject,
                title,
                day,
                id,
                category,
                content,
              }) => (
                <div key={id} className="allBlogClasses">
                  <img src={img} alt="" className="allblogSpider" />
                  <div className="allblogcontent">
                    <div className="allbloginfo">
                      <div className="writerContainer">
                        <img src={writer_img} alt="" />
                        <div className="writerbg">
                          <p className="writerName">{writer_name}</p>
                          <p>About Writer</p>
                        </div>
                      </div>
                      <p className="blogCategory">{category}</p>
                      <h6>{title}</h6>
                      <p>{subject}</p>
                    </div>
                    <div className="innerBlogAlign">
                      <nav>
                        <BsFillCalendarWeekFill className="blogIcon" />
                        <p> {day}</p>
                      </nav>
                      <nav>
                        <MdRemoveRedEye className="blogIcon" />
                        <p>5</p>
                      </nav>{" "}
                      <nav>
                        <AiOutlineWechat className="blogIcon" />
                        <p>2</p>
                      </nav>
                      <nav>
                        <MdOutlineBookmarkAdd className="blogIcon" />
                      </nav>{" "}
                    </div>
                    {view && (
                      <p>
                        {content ? (
                          content
                        ) : (
                          <p style={{ color: "red" }}>
                            {" "}
                            No content please update content
                          </p>
                        )}
                      </p>
                    )}

                    <div className="blogBtn">
                      {" "}
                      {view == false ? (
                        <button
                          onClick={() => setView(true)}
                          className="blogUpdateViewBtn"
                        >
                          View content
                        </button>
                      ) : (
                        <button
                          onClick={() => setView(false)}
                          className="blogUpdateViewBtn"
                        >
                          Close content
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteBlog(id)}
                        className="blogUpdateDeleteBtn"
                      >
                        Delete Blog
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Blog_Update;
