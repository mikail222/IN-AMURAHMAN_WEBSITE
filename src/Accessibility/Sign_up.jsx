import React, { useEffect, useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { GrCheckbox } from "react-icons/gr";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, db, storage } from "../firebaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Button from "./Button";

const Sign_up = ({ navigate, user }) => {
  const [error, setError] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [check, setCheck] = useState(false);
  const [success, setSuccess] = useState("");

  const [trackupload, setTrackUpload] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const intialValue = {
    first: "",
    LastName: "",
    email: "",
    phone: "",
    password: "",
    // fileUpload: "",
  };
  const [data, setData] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + fileUpload.name;
      const storageRef = ref(storage, "image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, fileUpload);

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

        (error) => {},

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData({ ...data, img: downloadURL });
          });
        }
      );
    };
    fileUpload && uploadfile();
  }, [fileUpload]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      ...fileUpload,
      [name]: value,
      day: new Date().toDateString(),
      time: serverTimestamp(),
    });
    console.log(data);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "Admin", res.user.uid), { ...data });
      setLoggedInUser(res.user);
      if (loggedInUser) {
        console.log({ loggedInUser });
        const currentUserDetails = user.find(
          (m) => m.email === loggedInUser?.email
        );
        updateProfile(currentUser, {
          displayName:
            currentUserDetails?.first + " " + currentUserDetails?.LastName,
          photoURL: currentUserDetails?.img,
          phoneNumber: currentUserDetails?.phone,
        }).then(() => {
          setTimeout(() => {
            setSuccess(
              `You are successfully signed in as ${
                data?.first + " " + data?.LastName
              }`
            );
          }, 5000);
          navigate("/User_modal");
        });
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(data);
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    const contactRegex = /^[0-9]/i;
    if (!values.first) {
      error.first = "Name is required";
    }
    if (!values.LastName) {
      error.LastName = "Last Name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (values.password.length < 6) {
      error.password = "password  should not be less than 6 digit";
    }
    if (!values.phone) {
      error.phone = "contact is required";
    } else if (!contactRegex.test(values.phone)) {
      error.phone = "This is not a valid contact it  must be a number";
    }

    return error;
  };
  return (
    <div className=" sign_up_form_container ">
      <div className="login_overlay">
        <p>{success}</p>
        <form onSubmit={handleSubmit} className="accessibility ">
          <div className="styleInputSection">
            <div className="uploadFileInput">
              <label htmlFor="fileInput" className="fileLabel ">
                <MdOutlineDriveFolderUpload className="fileIcon " />
                <p> choose image:</p>
              </label>
              <input
                accept="image/*,capture=camera"
                type="file"
                id="fileInput"
                name="file"
                className="fileInput"
                onChange={(e) => setFileUpload(e.target.files[0])}
              />
              {fileUpload ? (
                <img src={data.img} alt="" className="fileImg  " />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVCVV2vEZkPS1sMCHgmPsfLpWfr8wb-OubQ&usqp=CAU"
                  alt=""
                  className=" avartaIcon "
                />
              )}
            </div>
            <label htmlFor="" className="changeColor">
              {formError.first}
            </label>
            <input
              type="text"
              name="first"
              value={data.first}
              placeholder="First"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.LastName}
            </label>
            <input
              type="text"
              name="LastName"
              value={data.LastName}
              placeholder="Last Name"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.phone}
            </label>
            <input
              name="phone"
              value={data.phone}
              placeholder="Phone"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.email}
            </label>
            <input
              type={"email"}
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="" className="changeColor">
              {formError.password}
            </label>{" "}
            <div>
              <input
                type={passwordType}
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={(e) => handleChange(e)}
              />
              <button
                type="button"
                className="outline-0"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <BiShow className="show_password" />
                ) : (
                  <AiOutlineEyeInvisible className="show_password" />
                )}
              </button>
            </div>
          </div>
          <div className="tnc">
            <div className="firstDiv  ">
              <div className="secondDiv ">
                {!check ? (
                  <GrCheckbox
                    className="GrCheckboxIcon  "
                    onClick={() => setCheck(true)}
                  />
                ) : (
                  <BsFillCheckSquareFill
                    className="BsFillCheckSquareFillIcon  "
                    onClick={() => setCheck(false)}
                  />
                )}
              </div>
              <div>
                <p className="terms  ">
                  By proceeding, I acknowledge that I have read and agree to
                  IREHV
                  <b> terms & conditions</b>
                </p>
              </div>
            </div>
            <div
              className="sign_upButtonDiv
              "
            >
              {!error ? <Button trackupload={trackupload} /> : <Button />}
              <p className="terms">Already have an account</p>
              <p onClick={() => navigate("/Login")} className="loginText">
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
