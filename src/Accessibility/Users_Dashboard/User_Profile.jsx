import React, { useEffect, useState } from "react";
import { auth, storage } from "../../firebaseconfig";
import { MdLocationOn } from "react-icons/md";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const User_Profile = () => {
  const me = auth.currentUser;
  const [photoUrl, setPhotoUrl] = useState(null);
  const [profileUpdate, setProfileUpdate] = useState([]);

  const [trackphotoUrl, setTrackPhotoUrl] = useState(null);
  const handleChange = (e) => {
    const newInput = {
      ...photoUrl,
      [e.target.name]: e.target.value,
    };
    setProfileUpdate({ ...profileUpdate, ...newInput });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile(auth.currentUser, {
        ...profileUpdate,
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
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
  return (
    <div className="profile">
      <div className="profileForm">
        <form className="" onChange={(e) => handleChange(e)}>
          <div className="uploadBtn">
            <h6>Edit Profile</h6>
            <button className="btn" onSubmit={(e) => handleSubmit(e)}>
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
              <label htmlFor="">Username</label>
              <input type="text" name="Username" />
              <label htmlFor="">Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label htmlFor=""> First Name</label>
              <input type="text" name="first" />
              <label htmlFor="">Last Name</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <h6>CONTACT INFORMATION</h6>
          <div className="contactContainer">
            <article className="span">
              <label htmlFor="">Address</label>
              <input type="text" name="address" />
            </article>
            <div className="contactInfo">
              <div>
                <label htmlFor="">City</label>
                <input type="text" name="city" />
              </div>
              <div>
                <label htmlFor="">Country</label>
                <input type="text" name="Country" />
              </div>
              <div>
                <label htmlFor="">Postal Code</label>
                <input type="number" name="postalCode" />
              </div>
            </div>
            <h6>ABOUT ME</h6>
            <article>
              <label htmlFor="">About me</label>
              <input type="text" name="about" />
            </article>
            <div className="contactInfo">
              <div>
                <label htmlFor="">Institution</label>
                <input type="text" name="education" />
              </div>
              <div>
                <label htmlFor="">Job</label>
                <input type="text" name="job" />
              </div>
              <div>
                <label htmlFor="">Position</label>
                <input type="text" name="position" />
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
          <h6>Ilorin </h6>
          <h4>Nigeria</h4>
        </div>
      </div>
    </div>
  );
};

export default User_Profile;
// https://ilorininnovationhub.com/wp-content/uploads/2020/12/facility_3.jpg
