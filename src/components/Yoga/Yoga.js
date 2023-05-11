import React from "react";
import Navigator from "../Navigator/Navigator";
import workout from "./undraw_pilates_ltw9.svg";
import Footer from "../Footer/Footer";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
export default function Yoga() {
  return (
    <div>
      <div style={{ backgroundColor: "#282c34" }}>
        <Navigator />
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "0.2fr 1fr",
            columnGap: "5px",
            backgroundColor: " #282c34",
          }}
        >
          <img
            style={{
              display: "block",
              marginTop: "240px",
              justifyContent: "left",
            }}
            width="150%"
            height="200%"
            src={workout}
            alt="meditation img"
          ></img>
          <div style={{ padding: "30px", color: "white" }}>
            <p>
              <b style={{ color: "#9c4479", fontSize: "22px" }}>Yoga </b> is a
              group of physical, mental, and spiritual practices or disciplines
              which originated in ancient India and aim to control and still the
              mind, recognizing a detached witness-consciousness untouched by
              the mind and mundane suffering.
            </p>
            <p>
              The term "yoga" in the Western world often denotes a modern form
              of Hatha yoga and a posture-based physical fitness, stress-relief
              and relaxation technique, consisting largely of asanas; this
              differs from traditional yoga, which focuses on meditation and
              release from worldly attachments.
            </p>
          </div>
        </div>

        <h5 style={{ color: "wheat" }}>
          List of <i style={{ color: "#9c4479", fontSize: "22px" }}>Popular </i>{" "}
          Yoga Exercises
        </h5>
        <WorkoutCard />

        <Footer />
      </div>
    </div>
  );
}
