import React from "react";
import mikail from "../asset/mikail.png";
import umar from "../asset/Umar.jpg";
import CEO from "../asset/CEO.jpg";

import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import teamText from "../asset/Frame 1000001695.svg";
import defaultprofilepics from "../asset/Rectangle 130.svg";

const Our_Team = () => {
  return (
    <div className="our-team-container">
      <div className="our-team-overlay">
        <img src={teamText} alt="" />
        <p className="discription_p">
          With our Team and professional Staffs,your Cleaning and Consultancy
          needs ate in the right hand
        </p>

        <div className="our-team">
          <div>
            <img src={CEO} alt="" />
            <p className="name">Bello Abdulrahman</p>
            <p className="rank">Chief Executive Officer</p>{" "}
            <i>Expert in Pest control and Environmental Hygen maintainance.</i>
            <article className="social-medial">
              <GrFacebookOption className="social" />
              <AiOutlineTwitter className="social" />
              <RiLinkedinFill className="social" />
              <MdEmail className="social" />
            </article>
          </div>
          <div>
            <img src={defaultprofilepics} alt="" />{" "}
            <p className="name">AbdulFatah Bello</p>{" "}
            <p className="rank">General Secretary</p>{" "}
            <i>An experienced Human relation officer</i>
            <article className="social-medial">
              <GrFacebookOption className="social" />
              <AiOutlineTwitter className="social" />
              <RiLinkedinFill className="social" />
              <MdEmail className="social" />
            </article>
          </div>
          <div>
            <img src={umar} alt="" />
            <p className="name">Umar Suleiman</p>{" "}
            <p className="rank">Operation Manager</p>
            <i>
              professional and expert in destroyer pest detection and control{" "}
            </i>
            <article className="social-medial">
              <GrFacebookOption className="social" />
              <AiOutlineTwitter className="social" />
              <RiLinkedinFill className="social" />
              <MdEmail className="social" />
            </article>
          </div>{" "}
          <div>
            <img src={defaultprofilepics} alt="" />{" "}
            <p className="name"> AbdulSalam Abdulafeez</p>{" "}
            <p className="rank">Legal Advicer</p>{" "}
            <i>
              Experience legal practitional with several success in portfolio.
            </i>
            <article className="social-medial">
              <GrFacebookOption className="social" />
              <AiOutlineTwitter className="social" />
              <RiLinkedinFill className="social" />
              <MdEmail className="social" />
            </article>
          </div>
          <div>
            <img src={mikail} alt="" />
            <p className="name">Mikail Abdulraheem</p>{" "}
            <p className="rank">web Developer</p>
            <i>
              Expert in overwhelming web and mobile Application development.
            </i>
            <article className="social-medial">
              <a href="https://web.facebook.com/mikail.abdulraheem.3">
                <GrFacebookOption className="social" />
              </a>
              <a href="">
                <AiOutlineTwitter className="social" />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <RiLinkedinFill className="social" />
              </a>
              <a href="mailto:abdulraheemmukaila6@gmail.com">
                <MdEmail className="social" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Team;
