import React from "react";
import cleaningImg from "../asset/cdc-jjrXvzbqC5E-unsplash.jpg";

const Domestic_cleaning = ({ handleSubmit }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
      className="domestic"
    >
      <main style={{ width: "65%", height: "100%" }}>
        <div className="cleaningBg">
          <h4>Domestic cleaning Service</h4>
        </div>
        <p>
          We are proud of our home cleaning services and we are keen to provide
          an affordable service and ensuring the job is done to the highest
          quality. We are big on customer satisfaction, so we like to work with
          you and find out your specific requirements for your home and the
          areas you are particular about cleaning.
        </p>
      </main>
      <aside style={{ width: "30%", marginLeft: "1rem" }}>
        <div>
          <div className="form">
            <h4>Enquiry</h4>
            <form
              onSubmit={handleSubmit}
              style={{ height: "80vh", marginBottom: "1rem" }}
            >
              <label htmlFor="">Full Name</label>
              <input type="text" name="fullName" required />
              <label htmlFor="">Email</label>
              <input type="email" name="mail" required />
              <label htmlFor="">Contact</label>
              <input type="number" name="number" required />
              <label htmlFor="">Message</label>
              <textarea name="msg" id="msgs" cols="50" rows="4"></textarea>
              <button>submit</button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Domestic_cleaning;
