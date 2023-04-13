import React from "react";
import snake from "../asset/312226385_1797629957237115_964696407549559286_n.jpg";
import Footer from "../Footer";

const Snakes = () => {
  return (
    <div>
      <div style={{ marginTop: "2rem" }}>
        <div style={{ paddingTop: "5rem", margin: "0px,2rem" }}>
          <iframe
            width="90%"
            height="420"
            src="https://www.youtube.com/embed/0arsPXEaIUY"
            title="Nope Ropes, Sneks, & Danger Noodles"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ borderRadius: "15px", marginLeft: "4rem" }}
          ></iframe>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <main
            style={{
              width: "60%",
              // margin: "2rem",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "3rem",
            }}
          >
            <h2>SNAKE REMOVAL SERVICE</h2>
            <p style={{ fontSize: "1.5rem" }}>
              A snake problem only calls for the skills and expertise of
              specialists. The people that have already been bitten by poisonous
              snake would advise you to let the professionals handle a snake
              removal process. Rattlesnakes and other species of snakes have no
              problem biting and hurting humans.
            </p>
            <p style={{ fontSize: "1.4rem" }}>
              {" "}
              The venom that they release to incapacitate their prey is
              extremely potent and it can do a great harm to you and to your
              kids. Although snakes don’t like to reside near humans, they can
              accidentally find their way to your home.
            </p>{" "}
            <p style={{ fontSize: "1.4rem" }}>
              It may be because you have been infested by rodents. Snakes also
              hibernate during the special hot season and they can be rarely
              seen in the cold months. The good news about snakes is that
              running into them is fairly rare.
            </p>{" "}
            <p style={{ fontSize: "1.4rem" }}>
              Despite their fearsome reputation, most species of snakes are shy
              and do not want to confront humans. Most will not seek out humans,
              and if they do attack, it is done for defensive reasons because
              they have been stepped on or their habitat has been disturbed.
            </p>
            <p style={{ fontSize: "1.4rem" }}>
              {" "}
              However, snakes do sometimes end up around houses and buildings
              and do need some control and therefore, removal. Snakes range from
              being an unsightly irritant to deadly pests that can plague
              commercial spaces, warm storage units and factories. Ensuring the
              removal and prevention of snake infestation is vital for safety.{" "}
            </p>
          </main>
          <aside
            style={{
              width: "30%",
              alignItems: "center",
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ marginTop: "15rem" }} className="frame">
              <img src={snake} alt="" />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Snakes;
