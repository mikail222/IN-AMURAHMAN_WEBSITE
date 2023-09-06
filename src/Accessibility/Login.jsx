import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, storage } from "../firebaseconfig";
import Login_button from "./Login_button";

const Login = ({ navigate, user }) => {
  const [check, setCheck] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [email, setEmail] = useState();
  const [verifyEmail, setVerifyEmail] = useState();
  const [emailVerification, setEmailVerification] = useState();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const currentUser = auth.currentUser;
  const currentUserDetails = user.filter((m) => m.id === currentUser?.uid);
  // console.log(window.localStorage);
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        setUserErr(error.message);
        setTimeout(() => {
          setUserErr(null);
        }, 5000);
      });
  };
  useEffect(() => {
    sendEmailVerification(currentUser).then(() => {
      setEmailVerification("Email verification sent!");
      setTimeout(() => {
        setEmailVerification(null);
      }, 3000);
      if (currentUser.emailVerified == false) {
        setVerifyEmail(
          "please verify your are the owner of the  email provided"
        );
        setTimeout(() => {
          setVerifyEmail(null);
        }, 5000);
      } else {
        setSuccess("You're successfully logged in");
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
        navigate("/User_modal");
      }
    });
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
      }).then(() => {});
    }
  }, [loggedInUser]);

  const tooglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="sign_up_form_container">
      <div className="login_overlay">
        <div className="loginNotification">
          {success && <p>{success}</p>}
          {verifyEmail && <p>{verifyEmail}</p>}
          {emailVerification && <p>{emailVerification}</p>}
        </div>
        <form onSubmit={handleSubmit} className="accessibilityLogin">
          <div className="styleInputSectionLogin ">
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              type={"email"}
              required
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <label htmlFor="" className="label">
              Password
            </label>{" "}
            <div className="passwordclass">
              {" "}
              <input
                type={passwordType}
                required
                className="outline-0"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={tooglePassword}
                className="show_passwordbtn"
              >
                {passwordType === "password" ? (
                  <BiShow className="show_password" />
                ) : (
                  <AiOutlineEyeInvisible className="show_password" />
                )}
              </button>
            </div>
          </div>
          <div className="loginResetParentDiv  ">
            <div className="loginReset">
              <div className="checkDiv ">
                {!check ? (
                  <GrCheckbox
                    className=" GrCheckboxIcon "
                    onClick={() => setCheck(true)}
                  />
                ) : (
                  <BsFillCheckSquareFill
                    className="BsFillCheckSquareFillIcon "
                    onClick={() => setCheck(false)}
                  />
                )}
                <p>Remember me</p>
              </div>
              <div>
                <p
                  className="reset_password"
                  onClick={() => navigate("/Reset_Password")}
                >
                  Forget password?
                </p>
              </div>
            </div>
            <div className="sign_upButtonDiv">
              <Login_button />
              {userErr && <p className="errorMsg">Oops! {userErr}</p>}
              <p className="mt-[3%]">Don't have an account</p>
              <p
                onClick={() => setTimeout(navigate("/Sign_up"), 30000)}
                className="loginText"
              >
                Create account
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
