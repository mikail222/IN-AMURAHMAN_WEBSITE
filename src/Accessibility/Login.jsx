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
import { auth } from "../firebaseconfig";
import Login_button from "./Login_button";

const Login = ({ navigate, user }) => {
  const [check, setCheck] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const currentUser = auth.currentUser;
  const currentUserDetails = user.filter((m) => m.id === currentUser?.uid);

  console.log(currentUserDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setUserErr(error.message);
      });
  };
  useEffect(() => {
    sendEmailVerification(currentUser).then(() => {
      alert("Email verification sent!");
      if (currentUser.emailVerified === false) {
        alert("please verify your are the owner of the  email provided");
      } else {
        navigate("/User_modal");
      }
      // ...
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
        phoneNumber: currentUser.phone,
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
            <div>
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
                className="outline-0"
              >
                {passwordType === "password" ? (
                  <BiShow />
                ) : (
                  <AiOutlineEyeInvisible />
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
