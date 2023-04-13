import React from "react";
import ant from "../asset/peter-f-wolf-XG8eYNYdz54-unsplash.jpg";
import Footer from "../Footer";

const Ants = () => {
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
        className="ants"
      >
        <main style={{ width: "50%" }}>
          {" "}
          <p>
            According to terro, There are more than 10,000 known species of ants
            living throughout the world such as sugar ants, carpenter ants,
            soldier ants etc. Ants can be identified by the constriction between
            the abdomen and thorax that looks like a narrow waist. Their bodies
            are covered with a hard armour called the exoskeleton. Most ants are
            either red or black in colour and length can be anywhere from 1/3″
            to 1/2″. Like other insects, they have six legs; each with three
            joints. Ants have large heads with compound eyes, elbowed antennae,
            and powerful jaws.
          </p>
          <p>
            <b>There are three types of adult ants living in the colony:</b>
          </p>
          <p>
            the queen, female ants, and male ants. Queen ants are the largest
            ants in the colony. They have wings and their purpose is to lay
            eggs. The queens can live up to 30 years. Depending on the ant
            species and the nest community size, there may be one or more queens
            in the colony. Male ants develop from unfertilized eggs. Also called
            drones, male ants have wings and are fertile to mate with the queen.
            Male ants are much smaller than females and have longer antennae.
            The males only emerge from the colony for one day in order to mate.
            They usually die 10-14 days after mating. Female ants are smaller
            than the queen, wingless and sterile. Females result from fertilized
            eggs and can live up to three years. Known as workers or soldiers,
            female ants care for the eggs, tend to the larva, build and repair
            the nest, forage for food, and protect the colony. Causes It’s
            always nerve-racking to suddenly find out your home’s been overrun
            by ants. Below are some common reasons that lead to an infestation.
            Availability of food sources such as sugar, fruit juice, bread
            crumbs, meat, fat and any wraps, containers or trash that might have
            come in contact with these. Once these food sources are found,
            colonies can form long trails consisting of thousands of ants
            linking the colonies to these food sources.
          </p>
          <b>Water availability:</b>
          <p>
            The more reliable the water source, the closer the colony to your
            home.
          </p>
          <b>Weather:</b>
          <p>
            Several studies made have shown that there is a direct link between
            ant infestations as infestations seem to be more common and rampant
            during hot drought-like conditions and periods of heavy rainfall.
            Ants are relatively dormant during wintery and colder conditions.
          </p>
          <p>
            <b>
              Icon Inspection There are four things to look for when inspecting
              for ants namely:
            </b>
          </p>
          <li>1. Ant nests.</li>
          <li> 2. Piles of dirt.</li> <li>3. Wood shavings or grains.</li>{" "}
          <li>4. Ant pathways.</li>
          <p>
            <b>
              Icon Prevention Properly seal and close all foodstuff and items.
            </b>
          </p>
          <p>
            Promptly shut off any water outlet when not in use and clean up any
            puddles of water. Ensure proper cleaning and hygiene of your home.
          </p>
          <p>
            Icon Other Common Ant Odorous House Ants Carpenter Ants Pavement
            Ants Fire Ants Black garden Ants Argentine Ants
          </p>
          <p>
            Icon Protection Call your professional pest control company on the
            following numbers:
          </p>
        </main>
        <aside style={{ alignItems: "center", width: "40%" }}>
          <div className="clueVideo">
            <video src="" width="250" controls muted autoPlay></video>
          </div>
          <div className="frame">
            <img src={ant} alt="" />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Ants;
