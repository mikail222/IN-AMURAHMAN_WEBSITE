import { updatePassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AiFillWarning, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import passwordReset from "../../asset/reset_password.jpg";
import { auth } from "../../firebaseconfig";

const ChangePassword = ({ user }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const initialValue = { email: "", new: "", confirm: "" };
  const [password, setPassword] = useState(initialValue);

  const navigate = useNavigate();
  const checkUser = user?.filter(
    ({ email }) => email === auth.currentUser.email
  );

  const userpassword = checkUser.map((p) => p.password);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const newPassword = password.new;
    const user = auth.currentUser;
    setFormError(validate(password));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (password.confirm) {
        updatePassword(user, newPassword)
          .then(() => {
            alert(
              "Password is changed successfully,  please go ahead and login with your new password"
            );
          })
          .catch((error) => {
            alert(error);
          });
      }
    }
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;

    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.confirm) {
      error.confirm = "old password is required";
    }
    if (!values.new) {
      error.new = "new password is required";
    } else if (values.new.length < 6) {
      error.new = "password  should not be less than 6 character";
    }

    return error;
  };
  return (
    <div className="password">
      <img src={passwordReset} alt="" className="img" />
      <div className="passwordDiv">
        <h3>Change Password</h3>
        <div>
          <ul className="passwordul">
            <div className="div">
              {" "}
              <AiFillWarning />
              <p>Password must contain</p>
            </div>
            <li>length must be minimum of 6 character</li>
            <li>Must be minimum of of 1 uppercase letter</li>
            <li>Must contain minimum of 1 number</li>
            <li> Must contain minimum of 1 special character</li>
          </ul>
          <form
            onChange={(e) => handleChange(e)}
            onSubmit={(e) => handleResetPassword(e)}
          >
            <label htmlFor="">{formError.email}</label>
            <div>
              {" "}
              <input
                type="email"
                name="email"
                id="currents"
                placeholder="email"
                onChange={(e) => handleChange(e)}
                value={password.email}
              />
            </div>
            <label htmlFor="">{formError.confirm}</label>
            <div>
              {" "}
              <input
                type={passwordType}
                name="confirm"
                id="confirM"
                placeholder="old password"
                value={password.confirm}
                onChange={(e) => handleChange(e)}
              />{" "}
              <nav className="outline-0" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <BiShow className="passwordicon" />
                ) : (
                  <AiOutlineEyeInvisible className="passwordicon" />
                )}
              </nav>
            </div>
            <label htmlFor="">{formError.new}</label>
            <div>
              <input
                type={passwordType}
                name="new"
                id="neW"
                value={password.new}
                placeholder="new password"
                onChange={(e) => handleChange(e)}
              />
              <nav className="outline-0" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <BiShow className="passwordicon" />
                ) : (
                  <AiOutlineEyeInvisible className="passwordicon" />
                )}
              </nav>
            </div>

            <button type="submit">Change password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
