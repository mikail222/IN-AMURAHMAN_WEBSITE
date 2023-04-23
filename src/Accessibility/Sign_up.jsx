import React, { useEffect, useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { GrCheckbox } from "react-icons/gr";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { app, auth, db, storage } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Button from "./Button";
import irehv from "../asset/irehv-low-resolution-logo-color-on-transparent-background.png";

const Sign_up = ({ navigate, user }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [check, setCheck] = useState(false);
  const [trackupload, setTrackUpload] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState();

  console.log(fileUpload);
  console.log(data);
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

        (error) => {
          console.log(error);
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData({ ...data, img: downloadURL });
            console.log(data);
          });
        }
      );
    };
    fileUpload && uploadfile();
  }, [fileUpload]);

  const handleChange = (e) => {
    const newInput = {
      ...fileUpload,
      [e.target.name]: e.target.value,
    };
    setData({ ...data, ...newInput });
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
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        day: new Date().toDateString(),
        timeStamp: serverTimestamp(),
      });

      setLoggedInUser(res.user);
      console.log(res.user);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    if (loggedInUser) {
      console.log({ loggedInUser });
      const currentUserDetails = user.find(
        (m) => m.email === loggedInUser?.email
      );
      updateProfile(currentUser, {
        displayName:
          currentUserDetails?.first + " " + currentUserDetails?.LastName,
        photoURL: currentUserDetails?.img,
      }).then(() => {
        navigate("/User_modal");
      });
    }
  }, [loggedInUser]);
  return (
    <div className=" sign_up_form_container ">
      <p className="text ">CREATE ACCOUNT</p>
      <form
        onChange={(e) => handleChange(e)}
        onSubmit={handleSubmit}
        className="accessibility "
      >
        <div className="styleInputSection">
          <div className="uploadFileInput">
            <label htmlFor="fileInput" className="fileLabel ">
              <MdOutlineDriveFolderUpload className="fileIcon " />
              <p> choose image:</p>
            </label>
            <input
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
          <label htmlFor="" className="label">
            First Name
          </label>
          <input type="text" name="first" />
          <label htmlFor="" className="label">
            Last Name
          </label>
          <input type="text" name="LastName" />
          <label htmlFor="" className="label">
            Phone Number
          </label>
          <input type="number" name="phone" />
          <label htmlFor="" className="label">
            Email
          </label>
          <input type={"email"} required name="email" />
          <label htmlFor="" className="label">
            Password
          </label>{" "}
          <div>
            <input type={passwordType} required name="password" />
            <button
              type="button"
              className="outline-0"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <BiShow className="iconEye" />
              ) : (
                <AiOutlineEyeInvisible className="iconEye" />
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
                By proceeding, I acknowledge that I have read and agree to IREHV
                <b> terms & conditions</b>
              </p>
            </div>
          </div>
          <div
            className="sign_upButtonDiv
              "
          >
            {!error ? <Button trackupload={trackupload} /> : <Button />}
            {error && <p className="erroeMsg ">{error}</p>}
            <p className="terms">Already have an account</p>
            <p onClick={() => navigate("/Login")} className="loginText">
              Login
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sign_up;
