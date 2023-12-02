import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebaseconfig";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import irehv from "../../asset/irehv-low-resolution-logo-color-on-transparent-background.png";
import Product_Details from "./Product_Details";

const Product_UpdateForm = ({ product_detail, count }) => {
  const intialValue = {
    product_Name: "",
    stock: "",
    price: "",
    description: "",
  };
  const [product, setProduct] = useState(intialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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
    const { name, value } = e.target;
    setProduct({
      ...product,
      ...productFileUpload,
      [name]: value,
      day: new Date().toDateString(),
      time: serverTimestamp(),
    });
  };
  const collProductRef = collection(db, "Products");

  const update_Products = async (e) => {
    e.preventDefault();
    setFormError(validate(product));
    setIsSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      await addDoc(collProductRef, product);
    }
    e.target.reset();
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);
  const validate = (values) => {
    const error = {};
    const contactRegex = /^[0-9]/i;
    if (!values.product_Name) {
      error.product_Name = "Enter your product name";
    }
    if (!values.description) {
      error.description = " describe the product";
    }

    if (!values.stock) {
      error.stock = "stock quantity is required";
    } else if (!contactRegex.test(values.stock)) {
      error.stock = "stock  must be a number";
    }
    if (!values.price) {
      error.price = "price is required";
    } else if (!contactRegex.test(values.price)) {
      error.price = "price  must be a number";
    }
    return error;
  };
  return (
    <div>
      <div className="productUpdate">
        <form
          className="productUpdateForm"
          onSubmit={(e) => update_Products(e)}
        >
          <div className="heading">
            <img src={irehv} alt="" className="irehvupdateform" />
            <h4 className="updateheader">Products Update Form</h4>

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
          </div>
          <label htmlFor="">{formError && formError.product_Name}</label>
          <input
            type="text"
            placeholder="Product Name"
            name="product_name"
            value={product.product_Name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="">{formError && formError.stock}</label>
          <input
            type="number"
            placeholder="Stock"
            name="stock"
            value={product.stock}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="">{formError && formError.price}</label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="">{formError && formError.description}</label>
          <textarea
            type="text"
            placeholder="description"
            name="price"
            value={product.description}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="button">
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
            <p className="text">
              The more effortless the writing looks, the more effort the writer
              actually put into the process.
            </p>
          </div>
        </div>
      </div>
      {list && (
        <Product_Details product_detail={product_detail} count={count} />
      )}
    </div>
  );
};

export default Product_UpdateForm;
