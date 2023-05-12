import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Event_maintainance = ({ checkList }) => {
  const hiringItems = [
    {
      images:
        "https://image.made-in-china.com/2f0j00YRKGlcZfmtzQ/Mobile-Hot-Sale-Large-Garbage-Bin-660-Liters-Recycling-Bin-Rubber-Wheel-Plastic-Trash-Can.jpg",
      name: "Dustbin",
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmaJYfS1wTCVXEScbTNjSpbkvS_fMSL8zMw&usqp=CAU",
      name: "Extractors Floor Scrubber",
    },
    {
      images:
        "https://image.made-in-china.com/2f0j00NikfVOyFSRbo/Cheap-Double-Luxury-Outdoor-Mobile-Toilet-Trailer-Public-Portable-Toilet-for-Sale-in-China.jpg",
      name: "Mobile Toilet",
    },
    {
      images:
        "https://kmg-events.com/wp-content/uploads/2021/12/mobile-vip-toilet.jpg",
      name: "Executives Mobile Toilet",
    },
    {
      images:
        "https://cdn.thewirecutter.com/wp-content/media/2021/04/pressure-washer-2048px-0105-2.jpg?auto=webp&quality=75&width=1024",
      name: "Pressure Washer",
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_n4clno851Hhmf81HzdpB27Q4oRRj9cM0jw&usqp=CAU",
      name: "Storex",
    },
    {
      images:
        "https://images.yaoota.com/mcxOaL34lH6edE-rB6_5rci2mEg=/trim/yaootaweb-production-ng/media/crawledproductimages/8b48b5bfa179c48d9c3292440fc2115c7a8b40bb.jpg",
      name: "Pumping Machine",
    },
    {
      images:
        "https://thumbs.dreamstime.com/z/electric-rotary-lawn-mower-machine-mower-grass-cutter-lawnmower-mower-cutting-lawn-areas-motor-powered-lawn-mower-use-171088049.jpg",
      name: "Grass Cutter  Machine",
    },
    {
      images:
        "https://i.pinimg.com/736x/89/79/11/897911233779da7ed3c49010e125f950.jpg",
      name: "Portable Grass Cutter",
    },
  ];

  return (
    <div className="event-container">
      <div className="event">
        <main>
          <div className="event_managemnt">
            <h4>Event Management Service</h4>
          </div>
          <div>
            <p>
              Experience has shown how difficult it is to respond simutaniously
              to many need in an event and this has mirror the level of
              negligence of the people toward the hygienic aspect of numerious
              ceremonial environment.
            </p>
            <p>
              Therefore,to alivate this stress explain the reason why{" "}
              <b>IREHV</b> has design this particular services to celebrate with
              our client in an hygienic event environment,before,during,and
              after the event.
            </p>
            <h4 style={{ marginTop: "2rem" }}>
              ESSENTIAL DUTIES AND RESPONSIBILITIES{" "}
            </h4>
            <p>
              Duties include, but are not limited to, setting up and tearing
              down rooms for meetings, recreation activities, conventions and
              conferences, performing daily and monthly periodic maintenance of
              the facility including carpet care, tile floor care, restroom
              cleaning, kitchen cleaning, exterior building cleanup, assist in
              supervising some parttime workers engaged in maintenance, and
              other duties as assigned.
            </p>
          </div>
        </main>
        <aside>
          <Link to="/Show_Room">
            <p className="ads_Link"> Check out for our Products</p>
          </Link>
          {checkList.slice(3, 6).map(({ img, product_name, id }, i) => (
            <div className="event_ads" key={i}>
              <Link className="first" to={`Product_detail/${id}`}>
                <i>Buy Now</i>
                <img className="first_class_img" src={img} alt="" />
                <p>{product_name}</p>
              </Link>
            </div>
          ))}
        </aside>
      </div>
      <div className="hireEquipment">
        <div style={{ marginTop: "2.5rem", width: "100%" }}>
          <h4
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              padding: "1rem",
            }}
          >
            We also hire out cleaning machines and Public service facilities
          </h4>
          <div className="event_rent">
            {hiringItems.slice(0, 8).map(({ images, name }, i) => (
              <div key={i} className="event_img">
                <div>
                  <img src={images} alt="" />
                  <p>{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event_maintainance;
