import React from "react";
import Footer from "../Footer";
import flies from "../asset/chris-curry-N4AFGRPZGk4-unsplash.jpg";

const Flies = () => {
  return (
    <div>
      <div className="flies">
        <main>
          <p>
            <h3>Flies</h3>
            are insects of the order Diptera, the name being derived from the
            Greek δι- di- "two", and πτερόν pteron "wing". Insects of this order
            use only a single pair of wings to fly, the hindwings having evolved
            into advanced mechanosensory organs known as halteres, which act as
            high-speed sensors of rotational movement and allow dipterans to
            perform advanced aerobatics.[1] Diptera is a large order containing
            an estimated 1,000,000 species including horse-flies,[a] crane
            flies, hoverflies and others, although only about 125,000 species
            have been described.[4]
          </p>
          <p>
            Flies have a mobile head, with a pair of large compound eyes, and
            mouthparts designed for piercing and sucking (mosquitoes, black
            flies and robber flies), or for lapping and sucking in the other
            groups. Their wing arrangement gives them great maneuverability in
            flight, and claws and pads on their feet enable them to cling to
            smooth surfaces. Flies undergo complete metamorphosis; the eggs are
            often laid on the larval food-source and the larvae, which lack true
            limbs, develop in a protected environment, often inside their food
            source. Other species like Metopia argyrocephala are ovoviviparous,
            opportunistically depositing hatched or hatching maggots instead of
            eggs on carrion, dung, decaying material, or open wounds of mammals.
            The pupa is a tough capsule from which the adult emerges when ready
            to do so; flies mostly have short lives as adults.
          </p>{" "}
          <p>
            Diptera is one of the major insect orders and of considerable
            ecological and human importance. Flies are important pollinators,
            second only to the bees and their Hymenopteran relatives. Flies may
            have been among the evolutionarily earliest pollinators responsible
            for early plant pollination. Fruit flies are used as model organisms
            in research, but less benignly, mosquitoes are vectors for malaria,
            dengue, West Nile fever, yellow fever, encephalitis, and other
            infectious diseases; and houseflies, commensal with humans all over
            the world, spread food-borne illnesses. Flies can be annoyances
            especially in some parts of the world where they can occur in large
            numbers, buzzing and settling on the skin or eyes to bite or seek
            fluids. Larger flies such as tsetse flies and screwworms cause
            significant economic harm to cattle. Blowfly larvae, known as
            gentles, and other dipteran larvae, known more generally as maggots,
            are used as fishing bait and as food for carnivorous animals.
          </p>
          <h3>Relationship with other</h3>
          <p>
            The first true dipterans known are from the Middle Triassic (around
            240 million years ago), and they became widespread during the Middle
            and Late Triassic.[9] Modern flowering plants did not appear until
            the Cretaceous (around 140 million years ago), so the original
            dipterans must have had a different source of nutrition other than
            nectar. Based on the attraction of many modern fly groups to shiny
            droplets, it has been suggested that they may have fed on honeydew
            produced by sap-sucking bugs which were abundant at the time, and
            dipteran mouthparts are well-adapted to softening and lapping up the
            crusted residues.[10] The basal clades in the Diptera include the
            Deuterophlebiidae and the enigmatic Nymphomyiidae.[11] Three
            episodes of evolutionary radiation are thought to have occurred
            based on the fossil record. Many new species of lower Diptera
            developed in the Triassic, about 220 million years ago. Many lower
            Brachycera appeared in the Jurassic, some 180 million years ago. A
            third radiation took place among the Schizophora at the start of the
            Paleogene, 66 million years ago.[11]
          </p>
        </main>
        <aside>
          <div className="frame">
            <img src={flies} alt="" />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Flies;
