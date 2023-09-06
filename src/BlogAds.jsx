import React, { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import blogHeading from "./asset/blog.svg";
import timer from "./Accessibility/IREHV_Final (4)/Traced/Path 0.svg";

import rodient from "./asset/pexels-rodient.jpg";
import mosquito from "./asset/pexels-mosquito.jpg";

import { MdOutlineBookmarkAdd, MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BlogAds = ({ blogList }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="blogparentcontainer" data-aos="zoom-in">
      <img src={blogHeading} alt="" />
      <p className="discription_p">
        Get the latest and hand-on information about your environment and how
        make it clean
      </p>

      <div className="blogContainer">
        {blogList
          ?.slice(1, 2)
          .map(
            ({
              img,
              writer_img,
              writer_name,
              subject,
              title,
              day,
              ids,
              content,
              category,
            }) => (
              <div
                className="blogClass1"
                key={ids}
                onClick={() =>
                  navigate(`Blog_Details/${ids}`) ||
                  setCount((count) => count + 1)
                }
              >
                <img src={img} alt="" className="blogSpider1" />
                <div className="writerContainer">
                  <img src={writer_img} alt="" />
                  <div className="writerbg">
                    <p className="writerName">{writer_name}</p>
                    <p>About Writer</p>
                  </div>
                </div>
                <p className="blogCategory">{category}</p>
                <p className="latest">LATEST</p>
                <div className="blogcontent">
                  <div className="bloginfo">
                    <h6>{title}</h6>
                    <p>{subject}</p>
                  </div>

                  <div className="innerBlogAlign">
                    <nav>
                      <BsFillCalendarWeekFill className="blogIcon" />
                      <p> {day}</p>
                    </nav>
                    <nav>
                      <img src={timer} alt="" />
                      <p> 17min read</p>
                    </nav>
                    <nav>
                      <MdRemoveRedEye className="blogIcon" />
                      <p>{count}</p>
                    </nav>{" "}
                    <nav>
                      <AiOutlineWechat className="blogIcon" />
                      <p>2</p>
                    </nav>
                    <nav>
                      <MdOutlineBookmarkAdd className="blogIcon" />
                    </nav>
                  </div>
                </div>
              </div>
            )
          )}
        <div className="blogContainer2">
          {blogList
            ?.slice(2, 4)
            .map(
              ({
                img,
                writer_img,
                writer_name,
                subject,
                title,
                day,
                ids,
                content,
                category,
              }) => (
                <div
                  className="blogClasses"
                  onClick={() =>
                    navigate(`Blog_Details/${ids}`) ||
                    setCount((count) => count + 1)
                  }
                >
                  <img src={img} alt="" className="blogSpider" />
                  <div className="blogcontent">
                    <div className="bloginfo">
                      <div className="writerContainer">
                        <img src={writer_img} alt="" />
                        <div className="writerbg">
                          <p className="writerName">{writer_name}</p>
                          <p>About Writer</p>
                        </div>
                      </div>
                      <p className="blogCategory">{category}</p>
                      <h6>{title}</h6>
                      <p>{subject}</p>
                    </div>{" "}
                    <div className="innerBlogAlign">
                      <nav>
                        <BsFillCalendarWeekFill className="blogIcon" />
                        <p> {day}</p>
                      </nav>
                      <nav>
                        <img src={timer} alt="" />
                        <p> 17min read</p>
                      </nav>
                      <nav>
                        <MdRemoveRedEye className="blogIcon" />
                        <p>{count}</p>
                      </nav>{" "}
                      <nav>
                        <AiOutlineWechat className="blogIcon" />
                        <p>2</p>
                      </nav>
                      <nav>
                        <MdOutlineBookmarkAdd className="blogIcon" />
                      </nav>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
      <button className="blogbtn" onClick={() => navigate("/blog")}>
        VIEW ALL BLOGS
      </button>
    </div>
  );
};

export default BlogAds;
