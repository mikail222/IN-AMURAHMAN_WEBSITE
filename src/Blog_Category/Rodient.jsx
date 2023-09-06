import React, { useState } from "react";
import blogInfo from "../asset/blogHead.svg";
import timer from "../Accessibility/IREHV_Final (4)/Traced/Path 0.svg";

import Footer from "../Footer";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import {
  MdOutlineBookmarkAdd,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdRemoveRedEye,
} from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiSearch, BiTimer } from "react-icons/bi";
import Clean_touch from "../Clean_touch";

const Rodient = ({ blogList }) => {
  const [count, setCount] = useState(0);
  const [toggleBlog, setToggleBlog] = useState(false);
  const [findBlog, setFindBlog] = useState("");

  const Rodient_category = blogList?.filter(
    ({ category }) => category === "Rodient"
  );
  const navigate = useNavigate();
  const features = [
    { name: "Featured", pathTo: "" },
    { name: "Environment", pathTo: "Environment" },
    { name: "Homes", pathTo: "" },
    { name: "Office", pathTo: "" },
    { name: "Rodient", pathTo: "Rodient" },
    { name: "Hygiene", pathTo: "" },
    { name: "Pests", pathTo: "Pests" },
    { name: "Cleaning", pathTo: "" },
    { name: "Chemicals", pathTo: "" },
    { name: "Gadgets", pathTo: "" },
    { name: "Sewage", pathTo: "" },
    { name: "Recycling", pathTo: "" },
  ];
  const handleNextBtn = (e) => {
    e.preventDefault();
    if (toggleBlog) {
      e.target.style.color = "#133063";
    } else {
      e.target.style.color === "#00668B";
    }
    setToggleBlog(true);
  };

  const handlePrevBtn = (e) => {
    e.preventDefault();
    if (!toggleBlog) {
      e.target.style.color = "#00668B";
    } else {
      e.target.style.color = "#133063";
    }
    setToggleBlog(false);
  };
  const SearchBlog = Rodient_category?.filter(
    (p) =>
      p.title.toLowerCase().includes(findBlog.toLocaleLowerCase()) ||
      p.writer_name.toLocaleLowerCase().includes(findBlog.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="logo2">
        <div className="overlay">
          <div className="brand">
            <div className="alignStars">
              <img src={blogInfo} alt="" className="profession" />
            </div>
          </div>
        </div>
      </div>
      <div className="searchBlogs">
        <h2 style={{ fontWeight: "900", color: "#133063" }}>Featured</h2>
        <div className="inputSearch">
          <input
            type="text"
            value={findBlog}
            onChange={(e) => setFindBlog(e.target.value)}
            placeholder="Search"
          />
          <BiSearch className="searchIconBlog" />
        </div>
      </div>

      <div className="allBlogParentContainer">
        <div className="allBlogContainer">
          {!toggleBlog &&
            SearchBlog?.map(
              ({
                img,
                writer_img,
                writer_name,
                subject,
                title,
                day,
                ids,
                category,
              }) => (
                <div
                  key={ids}
                  className="allBlogClasses"
                  onClick={() =>
                    navigate(`Blog_Details/${ids}`) || setCount(count + 1)
                  }
                >
                  <img src={img} alt="" className="allblogSpider" />
                  <div className="allblogcontent">
                    <div className="allbloginfo">
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
          {toggleBlog &&
            SearchBlog?.slice(1, 4).map(
              ({
                img,
                writer_img,
                writer_name,
                subject,
                title,
                day,
                ids,
                category,
              }) => (
                <Link
                  to={`Blog_Details/${ids}`}
                  key={ids}
                  className="allBlogClasses"
                  onClick={() => setCount(count + 1)}
                >
                  <img src={img} alt="" className="allblogSpider" />
                  <div className="allblogcontent">
                    <div className="allbloginfo">
                      <div className="writerContainer">
                        <img src={writer_img} alt="" />
                        <div className="writerbg">
                          <p className="writerName">{writer_name}</p>
                          <p>About Writer</p>
                        </div>
                      </div>
                      <p className="blogCategory">{category}</p>
                      <h3 style={{ fontWeight: "700" }}>{title}</h3>
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
                </Link>
              )
            )}
        </div>
        <div className="categoryContainer">
          <h3>Explore more of what matter to you</h3>{" "}
          <div className="categories">
            {features.map(({ name, pathTo }, i) => (
              <div key={i} className="category">
                <button
                  onClick={() => navigate(`/${pathTo}`)}
                  className=""
                  style={{ cursor: "pointer" }}
                >
                  <p>{name}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="blogPages">
        {toggleBlog && (
          <div
            onClick={(e) => {
              handlePrevBtn(e);
            }}
          >
            <MdOutlineKeyboardArrowLeft />
            <p> Prev</p>
          </div>
        )}

        <div onClick={(e) => handleNextBtn(e)}>
          <p>Next</p>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <Clean_touch />
      <Footer />
    </div>
  );
};

export default Rodient;
