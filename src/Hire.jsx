import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Hire = () => {
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
    // {
    //   images: "",
    // },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="rent">
        {hiringItems.map(({ images, name }, i) => (
          <div key={i} data-aos="slide-up">
            <Link className="hiring">
              <img src={images} alt="" />
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hire;
