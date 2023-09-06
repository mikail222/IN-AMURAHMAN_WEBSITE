import React, { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdOutlineBookmarkAdd, MdRemoveRedEye } from "react-icons/md";
import timer from "./Accessibility/IREHV_Final (4)/Traced/Path 0.svg";
import Clean_touch from "./Clean_touch";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Next_to_Read from "./Blog_Category/Next_to_Read";

const Blog_Details = ({ blogList }) => {
  const { id } = useParams();
  const blogId = blogList.filter((p) => p.ids === id);

  console.log(blogId);
  const [count, setCount] = useState();
  return (
    <div>
      <div className="blogDetailContainer">
        <div className="blogDetail">
          <div className="searchblogDetail">
            <input type="text" placeholder="Search" />
            <BiSearch className="searchIconBlog" />
          </div>
          <div>
            {blogId?.map(
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
                <div key={ids} onClick={() => setCount(count + 1)}>
                  <h3 style={{ fontWeight: "700" }}>{title}</h3>
                  <p>{subject}</p>
                  <p className="blogCategory">{category}</p>

                  <div className="allblogDetailcontent">
                    <div className="allbloginfo">
                      <div className="writerContainer">
                        <img src={writer_img} alt="" />
                        <div className="writerbg">
                          <p className="writerName">{writer_name}</p>
                          <p>About Writer</p>
                        </div>
                      </div>
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
                    <img src={img} alt="" className="allblogDetailSpider" />
                  </div>
                  <p>{content}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <h2 className="nextRead">What to read next</h2>
      <Next_to_Read blogList={blogList} />
      <Clean_touch />
      <Footer />
    </div>
  );
};

export default Blog_Details;
