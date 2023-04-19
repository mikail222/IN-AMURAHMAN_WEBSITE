import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebaseconfig";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import irehv from "../../asset/irehv-low-resolution-logo-color-on-transparent-background.png";
import Product_Details from "./Product_Details";

const Product_UpdateForm = ({ product_detail }) => {
  const [product, setProduct] = useState([]);
  const [list, setList] = useState(false);
  const [trackupload, setTrackUpload] = useState(null);
  const [productFileUpload, setProductFileUpload] = useState(null);

  useEffect(() => {
    const uploadfile = () => {
      const identity = new Date().getTime() + productFileUpload.name;
      const storageRef = ref(storage, "Product_Image/" + identity);
      const uploadTask = uploadBytesResumable(storageRef, productFileUpload);

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
            setProduct({ ...product, img: downloadURL });
          });
        }
      );
    };
    productFileUpload && uploadfile();
  }, [productFileUpload]);

  const handleChange = (e) => {
    const newProduct = {
      ...productFileUpload,
      [e.target.name]: e.target.value,
    };
    setProduct({ ...product, ...newProduct });
  };
  const collProductRef = collection(db, "Products");

  const update_Products = async (e) => {
    e.preventDefault();
    await addDoc(collProductRef, {
      ...product,
      day: new Date().toDateString(),
      timesStamp: new Date(),
    });
    alert("product successfully added");
  };
  console.log(product);
  return (
    <div>
      <div className="productUpdate">
        <form className="productUpdateForm" onChange={(e) => handleChange(e)}>
          <div>
            {productFileUpload ? (
              <img src={product.img} alt="" className="fileImg  " />
            ) : (
              <label htmlFor="fileInput" className="fileLabel ">
                <MdOutlineDriveFolderUpload className="fileIcon " />
                <p> choose image:</p>
              </label>
            )}
            <input
              type="file"
              id="fileInput"
              name="file"
              className="fileInput"
              onChange={(e) => setProductFileUpload(e.target.files[0])}
            />
          </div>
          <img src={irehv} alt="" className="irehvupdateform" />
          <h4 className="updateheader">Products Update Form</h4>
          <label htmlFor=""></label>
          <input type="text" placeholder="Product Name" name="product_name" />
          <label htmlFor=""></label>
          <input type="number" placeholder="Quantity" name="quantity" />
          <label htmlFor=""></label>
          <input type="number" placeholder="Price" name="price" />
          <button type="button" onClick={update_Products} className="button">
            {trackupload !== null && trackupload < 100 ? (
              <i> loading...</i>
            ) : (
              "Update Stock"
            )}
          </button>{" "}
          {list ? (
            <p onClick={() => setList(false)} className="viewList">
              close stock list
            </p>
          ) : (
            <p className="viewList" onClick={() => setList(true)}>
              view stock list
            </p>
          )}
        </form>
        <div className="productSidebg">
          <div>
            <h3>"Attention is the new currency"</h3>
            <p className="texts">
              The more effortless the writing looks, the more effort the writer
              actually put into the process.
            </p>
          </div>
        </div>
      </div>
      {list && <Product_Details product_detail={product_detail} />}
    </div>
  );
};

export default Product_UpdateForm;
