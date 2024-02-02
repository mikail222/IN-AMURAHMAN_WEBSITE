import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../firebaseconfig";
import { MdLocationOn } from "react-icons/md";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

const User_Profile = ({ user }) => {
  console.log(user);
  const me = auth.currentUser;
  const intialValue = {
    Username: "",
    first: "",
    lastName: "",
    email: "",
    education: "",
    about: "",
    state: "",
    city: "",
    country: "",
    address: "",
    postacode: "",
    job: "",
    position: "",
  };
  const [photoUrl, setPhotoUrl] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [trackphotoUrl, setTrackPhotoUrl] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileUpdate({
      ...profileUpdate,
      ...photoUrl,
      [name]: value,
      updated: new Date().toDateString(),
    });
  };
  const currentUserDetails = user.find((m) => m.email === me?.email);
  console.log(currentUserDetails);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(profileUpdate));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      if (currentUserDetails) {
        const userDoc = doc(db, "Admin", currentUserDetails.id);
        updateDoc(userDoc, {
          Country: profileUpdate.country,
          job: profileUpdate.job,
          about_me: profileUpdate.about,
          institution: profileUpdate.education,
          city: profileUpdate.city,
          address: profileUpdate.address,
          user: profileUpdate.Username,
          img: profileUpdate.img,
          first: profileUpdate.first,
          LastName: profileUpdate.lastName,
          position: profileUpdate.position,
          state: profileUpdate.state,
          postacode: profileUpdate.postacode,
          lastUpdated: serverTimestamp(),
        }).then(() => {
          alert(
            "Your profile is successfully update,hope you enjoy our service.Thanks"
          );
        });
      }
    }
  };

  console.log(profileUpdate);
  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + photoUrl.name;
      const storageRef = ref(storage, "image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, photoUrl);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setTrackPhotoUrl(progress);
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
            setProfileUpdate({ ...profileUpdate, img: downloadURL });
          });
        }
      );
    };
    photoUrl && uploadfile();
  }, [photoUrl]);
  const validate = (values) => {
    const error = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    if (!values.first) {
      error.first = "Name is required";
    }
    if (!values.lastName) {
      error.lastName = "Last Name is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.Username) {
      error.Username = "user name is required";
    }
    if (!values.education) {
      error.education = "Institution is required";
    }
    if (!values.about) {
      error.about = " tell us about yourself";
    }
    if (!values.state) {
      error.state = "State is required";
    }
    if (!values.city) {
      error.city = "City is required";
    }
    if (!values.country) {
      error.country = "Country is required";
    }
    if (!values.address) {
      error.address = "address is required";
    }
    if (!values.job) {
      error.job = "Job is required";
    }
    if (!values.postacode) {
      error.postacode = "Postacode is required";
    }
    if (!values.position) {
      error.position = "Position is required";
    }
    return error;
  };
  return (
    <div className="profile">
      <div className="profileForm">
        <form className="" onSubmit={(e) => handleSubmit(e)}>
          <div className="uploadBtn">
            <h6>Edit Profile</h6>
            <button type="submit" className="btn">
              {trackphotoUrl !== null && trackphotoUrl < 100 ? (
                <i>loading picture</i>
              ) : (
                "Upload profile"
              )}
            </button>
          </div>
          <h6>USER INFORMATION</h6>
          <div className="formDiv">
            <div className="userInfo">
              <label htmlFor="">{formError.Username}</label>{" "}
              <input
                type="text"
                name="Username"
                placeholder="user Name"
                onChange={(e) => handleChange(e)}
                value={profileUpdate.Username}
              />
              <label htmlFor="">{formError.email}</label>{" "}
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => handleChange(e)}
                value={profileUpdate.email}
              />
            </div>
            <div>
              <label htmlFor="">{formError.first}</label>{" "}
              <input
                type="text"
                name="first"
                placeholder="First Name"
                onChange={(e) => handleChange(e)}
                value={profileUpdate.first}
              />
              <label htmlFor="">{formError.lastName}</label>{" "}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
                value={profileUpdate.lastName}
              />
            </div>
          </div>
          <h6>CONTACT INFORMATION</h6>
          <div className="contactContainer">
            <article className="span">
              <label htmlFor="">{formError.address}</label>{" "}
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={(e) => handleChange(e)}
                value={profileUpdate.address}
              />
            </article>
            <div className="contactInfo">
              <div>
                <label htmlFor="">{formError.city}</label>{" "}
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.city}
                />
              </div>
              <div>
                <label htmlFor="">{formError.state}</label>
                <input
                  type="text"
                  name="state"
                  onChange={(e) => handleChange(e)}
                  placeholder="state"
                  value={profileUpdate.state}
                />
              </div>
              <div>
                <label htmlFor="">{formError.country}</label>{" "}
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.country}
                />
              </div>
              <div>
                <label htmlFor="">{formError.postacode}</label>{" "}
                <input
                  type="number"
                  name="postacode"
                  placeholder="Posta code"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.postacode}
                />
              </div>
            </div>
            <h6>ABOUT ME</h6>
            <article>
              <label htmlFor="">{formError.about}</label>{" "}
              <input
                type="text"
                name="about"
                placeholder="About"
                onChange={(e) => handleChange(e)}
                value={profileUpdate.about}
              />
            </article>
            <div className="contactInfo">
              <div>
                <label htmlFor="">{formError.education}</label>{" "}
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.education}
                />
              </div>
              <div>
                <label htmlFor="">{formError.job}</label>{" "}
                <input
                  type="text"
                  name="job"
                  placeholder="Job"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.job}
                />
              </div>
              <div>
                <label htmlFor="">{formError.position}</label>{" "}
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  onChange={(e) => handleChange(e)}
                  value={profileUpdate.position}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="profileImage">
        <div className="myPics">
          <input
            type="file"
            id="fileInput"
            name="file"
            className="fileInput"
            placeholder="Photo url "
            onChange={(e) => setPhotoUrl(e.target.files[0])}
          />
          {photoUrl ? (
            <img src={profileUpdate.img} alt="" className="bg" />
          ) : (
            <img src={me?.photoURL} alt="" className="bg" />
          )}
          <div className="uploadBtn">
            <label htmlFor="fileInput" className=" btn">
              {trackphotoUrl !== null && trackphotoUrl < 100 ? (
                <i>loading picture</i>
              ) : (
                "Add Picture"
              )}
            </label>
            <button className="btn">Remove</button>
          </div>
        </div>
        <div className="userDetail">
          <h4>{me?.displayName}</h4>
          <MdLocationOn className="location" />
          <p className="scan"></p>
          <h6>{currentUserDetails?.city} </h6>
          <h6>{currentUserDetails?.state} </h6>
          <h4>{currentUserDetails?.Country}</h4>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
// https://ilorininnovationhub.com/wp-content/uploads/2020/12/facility_3.jpg
