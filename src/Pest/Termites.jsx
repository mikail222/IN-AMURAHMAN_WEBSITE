import React from "react";
import Footer from "../Footer";

const Termites = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5rem",
          width: "98%",
          marginLeft: "2rem",
          marginTop: "5rem",
        }}
        className="termites"
      >
        <main style={{ width: "50%" }}>
          <p>
            Termites Contrary to popular opinions, termites are cousins to
            Cockroaches not ants. According to fossil records and phylogenetic
            studies, they share common ancestory with cockroaches. Although they
            are often called white ants, and run a worker-soldier-reproductive
            member system like ants and wasps and bees, they are far from being
            related to ants. Termites are social insects of the cellulose
            digesting group. They have a unique system of communication called
            pheromones; a blend of chemical substances that coordinate
            interactions and pass information. They operate in well organized
            colonies and are the most successful insects.
          </p>{" "}
          <p>
            Below are members of a Termite colony and their roles. Queen
            Termite: The reproductive female, she starts the colony and lay eggs
            to be fertilized. The queen is the biggest member of the colony, is
            well developed and the only member with wings. She can have up to a
            hundred to thousands of eggs a day. There is usually one Queen in a
            colony, but 2-3 in large colonies.
          </p>
          <p>
            <b>King Termite:</b>
          </p>{" "}
          <p>
            The reproductive male. He fertilizes the eggs to make happy babies.
            The king and queen share the labor and take care of the first few
            generations until there are enough workers to help. Worker Termites:
            They are you helps in the colony, they take care of feeding for all,
            take care of the babies and clean the colony. The are the largest
            group in the population. Soldier Termites: They are the defenders of
            the colony and are about 1-5% of the population. The have soft
            bodies like the workers but have strong mandibles used for defense.
            Workers and soldiers are all sterile and can be male or female. The
            young ones become workers or soldiers depending on the pheromones
            they are exposed to by the queen. The colony continues to increase
            massively for about 5 years before the queen has her first young
            kings and queens. They mature, prepare to swarm and leave to start
            another colony in the summer. This cycle continues over and over.
          </p>
          <p>
            <b> Causes</b>
          </p>{" "}
          <p>
            1. Wood Piles: Termites eat wood, newspapers, cardboards, wallpapers
            and other cellulose rich items.
          </p>
          <p>2. Moisture: Termites are attracted to moisture</p>
          <p>
            {" "}
            3. Moist Soil: There is usually a lot of moisture in the soil your
            foundation is built.
          </p>
          <p>4. Warm dark places</p>
          <p> 5. Moisture</p>
          <p> 6. Dead trees Icon Termite Identification </p>
          <li>1. Six legs</li> <li>2. Straight pointing beady antennas </li>
          <li>3. Large heads with no distinct body segmentation</li>
          <li>
            {" "}
            4. Color ranges from Pale white to pale yellow when viewed singly
          </li>
          <li>5. When viewed as a swarm, appears darker</li>
          <h4> How to know if termites are in your property</h4>
          <li>
            {" "}
            1. Presence of wood colored pellets of faces appearing like wood
            dust or shavings
          </li>
          <li>2. Discarded wings resembling fish scales</li>{" "}
          <li>3. Mud tubes </li>
          <li>
            4. Tight fitting, hard to open doors and windows from damage by
            termites
          </li>
          <li>5. Crumbling damaged woods</li>
          <li>
            {" "}
            6. Flying termite swarms anywhere on your property (Young
            reproductives flying out to start new colonies)
          </li>{" "}
          <li>7. Wood that sounds hollow when tapped</li>{" "}
          <h4> Prevention Method</h4>
          <li> 1. Keep the soil around your home as dry as possible</li>{" "}
          <li>2. Repair any leaking pipes </li>{" "}
          <li>
            3. Divert excess water from your foundation with gutters and splash
            blocks.
          </li>
          <li>4. Keep firewood and wood piles far away from your home</li>{" "}
          <li>5. Replace damaged woods</li>
          <h3>GET PROFESSIONAL HELP!</h3>
          <p>
            Evidences of presence of Termites may not show until month or years
            or their stay. The best way to protect your home and properties is
            to get regular inspection, say, every year from a pest control
            professional. They can spot even the slimmest signs of termites,
            saving you from bills from damaged properties. Get professional help
            to get rid of already noticed Termite infestation.
          </p>
        </main>
        <aside style={{ alignItems: "center", width: "40%" }}>
          <div className="clueVideo">
            <iframe
              width="90%"
              height="480"
              src="https://www.youtube.com/embed/d8Lsy_MTGzc"
              // title="2019 Termite Always On Ads"
              allow=" autoplay"
              style={{ width: "100%", marginBottom: "3rem" }}
            ></iframe>
          </div>
          <div className="frame">
            <img
              src="https://www.collinsdictionary.com/images/full/termite_303633596.jpg"
              alt=""
            />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Termites;
