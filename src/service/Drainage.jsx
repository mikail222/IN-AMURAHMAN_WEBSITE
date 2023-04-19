import React from "react";
import Footer from "../Footer";

const Drainage = () => {
  return (
    <div>
      <div className="drainage">
        <main>
          <div className="drainimg">
            <h4>Drainage Service</h4>
          </div>
          <div className="drainageTexts">
            <p>
              Drainage maintenance is the maintenance of drainage system by
              keeping ditch, culvert and other drainage structure, clean and
              ready to carry next flow water as well as removing sediments
              deposited during period of heavy flow. This help to ensure the
              roadway achieves its designed service life.{" "}
            </p>
            <p>
              The most common causes of blocked drainage systems are: Buildup of
              household materials such as soap, hair, food, and fat in the pipes
              that solidify in external pipes. Piling up of objects such as
              leaves and dirt that get pushed into gutters and drains by rain
              and storms. Tree roots entering broken pipes
            </p>
            <p>
              The professional Staffs at IREHV are all Well mannered, bonded,
              and Certified, so you know that you can trust our work. We
              guarantee our workmanship and parts, confidently backing
              everything we do. With every client, our aim is to provide durable
              and effective repairs on the first visit, so we can resolve your
              drain issues quickly with as little inconvenience to you.
            </p>
          </div>
        </main>
        <aside>
          <div className="drainAdvert">
            <img
              src="https://media.istockphoto.com/id/1135314838/photo/repair-of-hydraulic-heating-system-in-the-house.jpg?s=612x612&w=0&k=20&c=Z8-BohVX0_Niqp72nroZzeK3m8C69U2xLcvQYE_iHuA="
              alt="plumbing"
            />

            <p>For proffessional plumbing service</p>
            <p>reach out to IREHV</p>
          </div>
          <div className="drainAdvert">
            <img
              src="https://www.liveandwingit.com/wp-content/uploads/2022/07/DOWNLOAD-FISH-FARMING-BUSINESS-PLAN-SAMPLE-300x225.jpeg"
              alt="Catfish"
            />

            <p>For Healthy Catfish procurement</p>
            <p>Consult IREHV</p>
          </div>
          <div className="drainAdvert">
            <img
              src="https://guardian.ng/wp-content/uploads/2020/08/Fish-1062x598.jpg"
              alt="Smoked Catfish"
            />

            <p>For Hygienic Smoked Catfish </p>
            <p>Get in Touch IREHV</p>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Drainage;
