import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Consultance = ({ handleSubmit }) => {
  return (
    <div className="consultance" style={{ marginBottom: "2rem" }}>
      <main style={{ width: "65%" }}>
        <div className="consultbg">
          <h4>Consultation Service</h4>
        </div>
        <div
          style={{
            marginLeft: "1rem",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
          className="consultparag"
        >
          <p>
            Amidst the important service delivery from IREHV to her Client is
            consultaton service,because it's an avenue to Orientate and educate
            our Client to facilitate optium collaboration in securing an
            hygienic Environment for quality asurance and establishement of a
            standardized enabling Environment as well as elimination of
            Environment Hazard
          </p>
          <p>
            Also your Consultation with IREHV provide sensitive information on
            new development in the Environment which are meant to be handle
            through extensive research and action confrontation.
          </p>
          <p>
            Pests and insects are generally undesirable beings, this is because
            they cause severe damage to the resources of man, and also they are
            a threat to public health.
          </p>
          <p>
            The recent Corona Virus & Lassa fever epidemic is just the tip of
            the iceberg of what dangers our society is exposed to if pests are
            not checked. Except with a sound control strategy, pests breed
            freely where might condition are not available. Pest control in all
            places, particularly homes, factories, and schools is important and
            compulsory as contained in existing national regulations towards
            enhancing a disease-free society
          </p>
        </div>
      </main>
      <aside style={{ width: "35%", marginLeft: "3rem" }}>
        <div className="serviceDescription" style={{ marginTop: "5rem" }}>
          <h4 style={{ color: "white" }}> 0ur Consultation Services are:</h4>
          <div>
            <GiCheckMark />
            <p>Environmental Hazard Management</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Seasonal Orientation Service</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Inspection</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Treatment</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Gym cleaning</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Hospital cleaning</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Swimming Pool cleaning</p>
          </div>
          <div>
            <GiCheckMark />
            <p>Factory cleaning & others</p>
          </div>
        </div>
        <div style={{ marginLeft: "2rem" }} className="form">
          <h4 style={{ marginTop: "2rem", marginLeft: "1rem" }}>Booking</h4>
          <form
            onSubmit={handleSubmit}
            style={{ width: "90%", height: "80%", marginTop: "1rem" }}
          >
            <label htmlFor="">Full Name</label>
            <input type="text" name="fullName" required />
            <label htmlFor="">Email</label>
            <input type="email" name="mail" required />
            <label htmlFor="">Contact</label>
            <input type="number" name="number" required />
            <label htmlFor="">Purpose</label>
            <textarea name="msg" id="msgs" cols="50" rows="4"></textarea>
            <button>submit</button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default Consultance;
