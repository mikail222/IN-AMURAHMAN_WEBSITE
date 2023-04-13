import React from "react";
import video1 from "./asset/311938461_6311636382231816_1313610490077304004_n.mp4";
import video2 from "./asset/312118183_5972964576056640_4024777849847619886_n.mp4";
import img1 from "./asset/311316261_778122419947964_2059757928105644870_n.jpg";
import img2 from "./asset/311510913_1284330562392135_9062514054642562937_n.jpg";
import img3 from "./asset/310932710_848141559531631_7787759532590744112_n.jpg";
import img4 from "./asset/310758677_840223477133728_5120667289649907055_n.jpg";
import img5 from "./asset/311941788_6202308913117033_3212476714928537297_n.jpg";
import Footer from "./Footer";
const Clues = () => {
  return (
    <div className="clue">
      <div className="clueVideo">
        <video src={video1} width="250" controls muted autoPlay></video>
        <video src={video2} width="250" controls muted autoPlay></video>
      </div>
      <div className="clueImg">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Clues;
