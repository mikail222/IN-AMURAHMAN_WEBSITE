import React from "react";
import Footer from "../Footer";

const BedBugs = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4rem",
          width: "98%",
          marginLeft: "2rem",
          marginTop: "5rem",
        }}
        className="bedbugs"
      >
        <main style={{ width: "50%" }}>
          <h4>Bed bugs</h4>{" "}
          <p>
            are insects from the genus Cimex that feed on blood, usually at
            night. They are small, parasitic insects that like to live on
            mattresses, box springs, and other furniture. They are flightless
            but tend to crawl extremely quickly. The size of a large grain of
            rice, a bed bug prefers the dark greatly. Their bites can result in
            a number of health impacts including skin rashes, psychological
            effects, and allergic symptoms. Bed bug bites may lead to skin
            changes ranging from small areas of redness to prominent blisters.
          </p>{" "}
          <h3> CAUSES THERE ARE 3 MAIN CAUSES NAMELY</h3>
          <ul>
            <li>
              {" "}
              1. <b> Schools, Colleges and Dormitories:</b> Since these pests
              can easily be transferred via beddings, clothing and furniture. So
              kids, teens and adults can unknowingly carry these to their homes.
            </li>
            <li>
              {" "}
              2.<b> Buying used furniture:</b> Oh yes, the second-hand furniture
              are veritable nesting areas for these pests. Buying used furniture
              or getting it from a friend or relative is another cause of a bed
              bug infestation. You could unknowingly purchase a piece of
              furniture that already has some bed bugs or eggs in it, just
              waiting to give you little bites. Before purchasing used
              furniture, use a flashlight and look closely at the edges, seams,
              and any cracks there may be in the furniture for bed bugs.
            </li>
            <li>
              {" "}
              3.<b> Traveling:</b> Journeying between communities both
              domestically and internationally can lead to a bed bug
              infestation. Places with high turnover rates, such as hotels,
              motels, and Airbnb’s are primary areas for picking up bed bugs.
              Not only could you bring home bed bugs from sleeping on the beds
              in these accommodations, but they can also find their way into
              your luggage if you put it on the bed or other furniture. Inspect
              To properly inspect for bedbugs, using a good torchlight, ull back
              the bed sheets and blankets and check the mattress and box-spring
              seams for bugs, especially at the head of the bed. Adults, nymphs
              and larvae are pretty visible to the naked eye. Check carefully
              for rust-coloured spots as they indicate presence of bed bugs.{" "}
            </li>
          </ul>
          <h3> Treatment </h3>
          <ul>
            <li>1. Clean and vacuum the affected areas </li>
            <li>
              {" "}
              2. Put clothes, sheets and beddings in a dryer and if one is not
              readily available, spreading these out in sunlight is a great
              option.
            </li>
            <li>
              3. Encase your mattress in a fitted mackintosh and once installed
              it should not be removed.
            </li>{" "}
            <li>
              {" "}
              4. Call a professional exterminator; hence call <h5> IREHV</h5> on
              the following numbers:08144632165. <h4> Prevention:</h4> In
              preventing bed bug infestations, there are several things one can
              do such as;
              <li>
                1.
                <i>
                  While traveling, check the bottom: ; seams and folds of the
                  bed with a flashlight before sitting or lying on it. You’ll be
                  able to see these tiny insects with no problem. Also, don’t
                  place your suitcase on the furniture or where the wall meets
                  the floor.
                </i>
              </li>
              <li>
                2.
                <i>
                  When at home, clean it often. Wash your sheets once a week and
                  dry in a dryer on high heat. Vacuum regularly and keep areas
                  clutter-free.
                </i>
              </li>
              <li>
                3.
                <i> Do not share bedding and clothing articles.</i>
              </li>
            </li>
          </ul>
        </main>
        <aside style={{ alignItems: "center", width: "40%" }}>
          <div className="clueVideo">
            <video
              src="https://youtu.be/ToeWrGTGOOI?t=46"
              width="250"
              controls
              muted
              autoPlay
            ></video>
          </div>
          <div className="frame">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bed_bug%2C_Cimex_lectularius.jpg/1200px-Bed_bug%2C_Cimex_lectularius.jpg"
              alt=""
            />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default BedBugs;
