import React from "react";
import spiders from "../asset/ed-van-duijn-UUdJ-0LQs0M-unsplash.jpg";
import Footer from "../Footer";

const Spider = () => {
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
        className="spider"
      >
        <main style={{ width: "50%" }}>
          {" "}
          <p>
            Spiders are one of the most common household pests and ranks seventh
            in total species diversity of all organisms in the world. There are
            over 49,600 species of spiders, and they range from outhouse
            dwellers to home dwellers.
          </p>
          <p>
            Spiders belong to the same division as insects, but are different in
            that they have 8 simple eyes instead of compound eyes like the
            insects, they have 2 body segments; the head is fused with the
            thorax, forming the cephalothorax and an abdomen unlike insects that
            have distinct head, thorax and an abdomen. They have 8 walking legs
            while insects have 6.
          </p>{" "}
          <p>
            Spiders produce silk, This silk is used in building webs, but not
            all spiders build webs. Silk production is common to all spiders,
            and they do different things with this material.
          </p>
          <b>Spider Web:</b>{" "}
          <p>
            Silk is the proteinous strands extruded from the spinnerets of the
            spider at the tip of it’s belly. Web is a network of silk, the fine
            structure made from those strands. Spiders build webs typically to
            trap insects to eat. Some others that don’t use webs can release a
            single line heavy, sticky silk to catch prey(thinll,k of spider Man)
            and draw them close.
          </p>
          <b>Communication:</b>{" "}
          <p>
            Silk produced make use of chemical signals called pheromones. Other
            spiders know what type of spider is around and what gender by the
            smell protruding from the silk.
          </p>{" "}
          <b> Relationship and reproduction:</b>
          <i>
            {" "}
            “For web-building spiders, silk is a dance floor for male courtship
            displays.”
          </i>
          <p>
            Says Scott, an archeologist from The University of Toronto They do
            this to woo the female and convince her he is a suitor, not dinner.
            Males would send vibrations through the female’s web and may
            restructure her web by destroying a section of it and building his
            own, maybe to hide her from other males around. They also present
            gifts of food items wrapped in silk to woo the female. Dishonest
            ones would wrap a stone or seed instead. If he’s lucky, might get
            away with a copulation before she discovers.
          </p>
          <b>Protection:</b>{" "}
          <p>
            Female spiders use silk to safeguard their eggs and build a nursery
            to protect young ones.
          </p>
          <b>Transportation:</b>{" "}
          <p>
            Silk can be used for transportation. Spiders don’t have wings, but
            they can leverage on their silk producing ability to move around,
            from tree branch to tree branch, by letting out a line, they glide
            in the air. It’s better than crawling. All spiders are predators,
            feeding mostly on insects. They do that in different ways. Through
            direct hunting or web traps.
          </p>
          <p>
            Spiders that don’t build webs have a well developed sense of touch
            or sight which enables them to be active hunters that can chase and
            overpower their prey. Others make webs to capture prey. Some spiders
            inject venom into their prey to kill it fast while others first use
            silk weaves to trap their prey. They liquefy their food by vomiting
            digestive enzymes on it before ingesting because their guts are too
            narrow to take solids.
          </p>
          <p>
            Spiders also practice cannibalism where bigger spiders feed on the
            smaller ones. Males being much smaller than females are victims and
            attach themselves to potential mates as a defense. Males have a
            shorter lifespan and don’t live so long after mating. Females care
            for the young ones by carrying them around and sharing food with
            them. Interestingly, the fear of spiders is one of the most
            prevalent amongst phobias for organisms in the world. People think
            of spiders and think of scary, gigantic 8 footed, furry creatures
            advancing towards them to sting and paralyze them for life. However,
            only a handful of spider species are a direct threat to humans. All
            spiders bite, but not all are poisonous to humans. Later in this
            article, you’ll get a list of the most dangerous spiders.
          </p>
          <h4>
            LIST OF 5 MOST DANGEROUS SPIDERS The Brazilian Wandering Spider:
          </h4>
          <p>
            An active hunter and traveller. Nests in warm, cozy places and can
            also crawl into flowers and fruits.
          </p>
          <b>Black widow spider:</b>{" "}
          <p>Found outdoor and around woodpile. Bites only in self defense.</p>
          <b>Brown Widow Spider:</b>
          <p> Bites when web is disturbed and when threatened.</p>
          <b> Brown Recluse Spider:</b>
          <p>
            Found inside your shoes, under the bed and mattress. Bites when sat
            on or pressed against a surface. Such bites are fatal and can lead
            to death.
          </p>
          <b>The Six-Eyed Sand Spider:</b>
          <p> Found in deserts and Sandy environments.</p>
          <h3>WHY DO I HAVE SPIDERS IN MY HOME?</h3>{" "}
          <p>
            Spiders are clean creatures, unlike cockroaches and are not
            attracted by dirt. But they sure do like to eat. Spiders eat insects
            and as such, choose a place that is a hot spot for insects as
            shelter.
          </p>
          <p>
            So, if you notice spider webs in your home or see spiders, know
            there’s a high population of insects in your home and it needs to be
            taken care of fast . We see that spiders help to deal with insects
            in your home. Infact, 1 Spider can eat about 2000 insects in one
            year, including roaches. With this benefit, are there dangers in
            having spiders in your home? They Bite You And Your Kids: They may
            look like the most amazing creatures and the good guys in your home,
            but, they bite! All spiders bite, poisonous or not. These bites are
            painful and irritating.
          </p>
          <p>
            And can lead to serious harm on your once beautiful skin if not
            medically treated. They Make Your Home Unattractive: Spiders stain
            your wall and furniture, but more disapproving are the webs they
            build in every corner of your home. The embarrassment of your guest
            walking into a line of silk and getting it in his hair, The duty of
            cleaning up after them every morning, all that can be such a pain.
          </p>
        </main>
        <aside style={{ alignItems: "center", width: "40%" }}>
          <div className="clueVideo">
            <video src="" width="250" controls muted autoPlay></video>
          </div>
          <div className="frame">
            <img src={spiders} alt="" />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Spider;
