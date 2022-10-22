import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul>
          <h5>Cleaning Service</h5>
          <li>
            <a href="">Domestic,Office,Hotel Cleaning</a>
          </li>
          <li>
            <a href="">Fumigation and Pest Control</a>
          </li>
          <li>
            <a href=""> Wast Management</a>
          </li>
          <li>
            <a href="">Drainage Maintainance Service</a>
          </li>
          <li>
            <a href="">Event Hygienic Maintainace service</a>
          </li>
        </ul>
        <ul>
          <h5>Our Specification</h5>
          <a href="#">
            <li> General Cleaning Service</li>
          </a>
          <a href="#">
            <li> Product Sales</li>
          </a>
          <a href="#">
            <li> Hiring of Equipment</li>
          </a>
          <a href="#">
            <li>Consultation Service</li>
          </a>
          <a href="#">
            <li> Trainning Services</li>
          </a>
        </ul>
        <ul>
          <h5>Product </h5>
          <li>
            <Link></Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <h5>Domestic Service</h5>
          <li>
            <a href="">Toilet </a>
          </li>
          <li>
            <a href="">Kitchen </a>
          </li>
          <li>
            <a href="">Bed Room</a>
          </li>
          <li>
            <a href="">Wardrobe</a>
          </li>
          <li>
            <a href="">Sitting Room</a>
          </li>
        </ul>
        <ul>
          <h5>Information</h5>
          <li>
            <a href="">Terms & Condition</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="media">
        <div className="media1">
          <div className="facebook">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswY2vcSlXIUEvM5dxVvc3llEw-9AHa5FjVA&usqp=CAU"
                alt="facebook"
              />
            </a>
            <p>Facebook</p>
          </div>
          <div className="twitter">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="https://toppng.com/uploads/preview/twitter-logo-11549680523gyu1fhgduu.png"
                alt="twitter"
              />
            </a>
            <p>Twitter</p>
          </div>
          <div className="instagram">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyy2cGG6pe-CuLx9q6PESihqFPwKOYonezyg&usqp=CAU"
                alt="instagram"
              />
            </a>
            <p>Instagram</p>
          </div>
        </div>
        <div className="media2">
          <div className="email">
            {" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/bigtechquestion.com/wp-content/uploads/2018/10/Gmail-header.png?w=1320&ssl=1"
                alt="email"
              />
            </a>
            <p>Email</p>
          </div>
          <div className="whatsapp">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png"
                alt="whatsapp"
              />
            </a>
            <p>WhatsApp</p>
          </div>
          <div className="contact1">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img
                title="contact"
                src="https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-calling-telephone-line-icon-vector-png-image_1885981.jpg"
                alt="contact"
              />
            </a>
            <p>+234(0)8144632165</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
