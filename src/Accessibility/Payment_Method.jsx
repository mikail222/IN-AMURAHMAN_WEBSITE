import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseconfig";
import Googlepay from "./Googlepay";

const Payment_Method = ({ setTogglePage }) => {
  const [payment, setPayment] = useState({});
  const [item, setItem] = useState(false);
  const intialValue = { firstName: "", lastName: "", email: "", contact: "" };
  const [formValue, setFormValue] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  const cartItem = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const [cart, setCart] = useState(cartItem);
  const total = cart
    .map(({ price, qty }) => Number(price * qty))
    .reduce((a, b) => a + b, 0);

  const collPayRef = collection(db, "Payment-details");
  const handleChange = (e) => {
    e.preventDefault();
    const product_name = cart.map(({ product_name }) => product_name);
    const num = cart.map(({ qty }) => qty);
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
      day: new Date().toDateString(),
      qtys: num,
      items: product_name,
      amount: total,
    });
  };

  const update_Payment = async (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
    await addDoc(collPayRef, formValue);
    if (Object.keys(formError).length === 0 && isSubmit) {
      window.confirm("Payment successfully uploaded");
      // navigate("/Googlepay");
    }
  };

  console.log(formError);
  useEffect(() => {
    console.log(formValue);
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
    AOS.init({ duration: 3000 });
  }, [formError]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    if (!values.firstName) {
      error.firstName = "Name is required";
    }
    if (!values.lastName) {
      error.lastName = "Last Name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.contact) {
      error.contact = "contact is required";
    }
    return error;
  };

  return (
    <div
      className="paymentUpdate"
      data-aos="fade-zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {item == true ? (
        <div className="">
          <Googlepay />
          <button>confirm payment</button>
        </div>
      ) : (
        <form className="productUpdateForm" onSubmit={update_Payment}>
          <h4 className="updateheader">Payment Form</h4>
          <p>please input your details correctly for better transaction</p>
          <p> Thanks</p>
          <input
            type="text"
            placeholder="First Name"
            value={formValue.firstName}
            name="firstName"
            onChange={(e) => handleChange(e)}
          />
          <i>{formError.firstName}</i>
          <input
            type="text"
            placeholder=" Last Name"
            value={formValue.lastName}
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
          <i>{formError.lastName}</i>
          <input
            // type="email"
            placeholder="Email"
            value={formValue.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />{" "}
          <i>{formError.email}</i>
          <input
            type="number"
            placeholder="Contact"
            value={formValue.contact}
            name="contact"
            onChange={(e) => handleChange(e)}
          />
          <i>{formError.contact}</i>
          <div className="button">
            <button type="submit">Pay</button>
            {/* <button onClick={() => setItem(true)}>Items</button> */}
          </div>
        </form>
      )}
      <div className="productSidebg">
        <div>
          <h3>"Health is Wealth"</h3>
          <p>
            The more effortless the hazard eradication looks, the more effort
            the conscious mind actually put into the process.
          </p>
          <p>IREHV</p>
        </div>
      </div>
    </div>
  );
};

export default Payment_Method;
