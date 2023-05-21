import React from "react";
import mikail from "../asset/Screenshot from 2021-12-08 17-09-10.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Our_Team = () => {
  return (
    <div className="our-team-container">
      <div className="our-team-overlay">
        <h3>𝑀𝑒𝑒𝓉 𝒪𝓊𝓇 𝒯𝑒𝒶𝓂</h3>
        <div className="our-team">
          <div>
            <img src={mikail} alt="" />
            <p className="name">Mikail Abdulraheem</p>
            <i>
              professional and experience soft-ware engineers, building world
              class web and mobile Application for overwhelming user's
              experience and friendlyness{" "}
            </i>
            <p>web Developer</p>
            <article className="social-medial">
              <a href="https://web.facebook.com/mikail.abdulraheem.3">
                <GrFacebookOption />
              </a>
              <a href="">
                <AiOutlineTwitter />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <RiLinkedinFill />
              </a>
              <a href="mailto:abdulraheemmukaila6@gmail.com">
                <MdEmail />
              </a>
            </article>
            <p>+234-8124330616</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtwcGm4AQnPv_n8iVk6Il1D4Uoh76CAapTg&usqp=CAU" />{" "}
            <p className="name">Umar Suleiman</p>
            <i>
              professional and expert in destroyer pest detection and control{" "}
            </i>
            <p>Operation Manager</p>
            <article className="social-medial">
              <GrFacebookOption />
              <AiOutlineTwitter />
              <RiLinkedinFill />
              <MdEmail />
            </article>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHT8jjk1PL6dTV0K50dAqOstdGyCCOKhPglAUHH0RjSd9cC9VHF1Ua7qmMxDHwz3_qvAA&usqp=CAU"
              alt=""
            />{" "}
            <p className="name">Bello Abdulrahman</p>
            <i>
              professional and expert in Pest control and Environmental Hygen
              maintainance. Consultant and Advicer on top Environmental Hard
              prevention and protection issues
            </i>
            <p>Chief Executive Officer</p>{" "}
            <article className="social-medial">
              <GrFacebookOption />
              <AiOutlineTwitter />
              <RiLinkedinFill />
              <MdEmail />
            </article>
          </div>
          <div>
            <img
              src="https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
              alt=""
            />{" "}
            <p className="name">AbdulFatah Bello</p>
            <i>
              An experienced Human relation officer with outstanding client
              hospitality recongnision
            </i>
            <p>General Secretary</p>{" "}
            <article className="social-medial">
              <GrFacebookOption />
              <AiOutlineTwitter />
              <RiLinkedinFill />
              <MdEmail />
            </article>
          </div>
          <div>
            <img
              src="https://glplaw.com/wp-content/uploads/2021/03/4.png"
              alt=""
            />{" "}
            <p className="name">Barr: AbdulSalam Abdulafeez</p>
            <i>
              professional and experience legal practitional with several record
              of success in portfolio.
            </i>
            <p>Legal Advicer</p>{" "}
            <article className="social-medial">
              <GrFacebookOption />
              <AiOutlineTwitter />
              <RiLinkedinFill />
              <MdEmail />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Team;
