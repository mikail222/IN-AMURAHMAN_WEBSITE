import React, { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdOutlineBookmarkAdd, MdRemoveRedEye } from "react-icons/md";
import timer from "../Accessibility/IREHV_Final (4)/Traced/Path 0.svg";
import { useNavigate } from "react-router-dom";

const Next_to_Read = ({ blogList }) => {
  const [count, setCount] = useState();
  const navigate = useNavigate();

  return (
    <div className="whatToReadNextContainer">
      <div className="whatToReadNext">
        {blogList
          ?.slice(2, 5)
          .map(
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
                onClick={() =>
                  navigate(`Blog_Details/${ids}`) || setCount(count + 1)
                }
              >
                <img src={img} alt="" className="whatToReadClass" />
                <div className="writerContainer">
                  <img src={writer_img} alt="" />
                  <div className="writerbg">
                    <p className="writerName">{writer_name}</p>
                    <p>About Writer</p>
                  </div>
                </div>
                <p className="blogCategory">{category}</p>
                <h6 style={{ fontWeight: "700" }}>{title}</h6>
                <p>{subject}</p>

                <div className="allblogcontent">
                  <div className="allbloginfo"></div>{" "}
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
                      UP <MdRemoveRedEye className="blogIcon" />
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
  );
};

export default Next_to_Read;
