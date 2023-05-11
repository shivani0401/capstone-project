import React from "react";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import workout from "./undraw_working_out_re_nhkg.svg";
export default function Pilates() {
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
              marginTop: "160px",
              justifyContent: "left",
            }}
            width="120%"
            height="100%"
            src={workout}
            alt="meditation img"
          ></img>
          <div style={{ padding: "30px", color: "white" }}>
            <p>
              <b style={{ color: "#9c4479", fontSize: "22px" }}>
                Abdominal exercises{" "}
              </b>{" "}
              are a type of strength exercise that affect the abdominal muscles
              (colloquially known as the stomach muscles or "abs"). Human
              abdominal consist of four muscles which are the rectus abdomens,
              internal oblique, external oblique, and transversus abdominis.[1]
              When performing abdominal exercises it is important to understand
              the effects, functions, the types of exercises, and think about
              how to perform this exercise safely.
            </p>
            <p>
              The goal of core training is definitely not to develop muscle
              hypertrophy but to improve functional predispositions of physical
              activity. This particularly involves improving intermuscular
              coordination or synchronization of participating muscles.
            </p>
          </div>
        </div>

        <h5 style={{ color: "wheat" }}>
          List of Popular Abdominal Exercises
        </h5>
        <WorkoutCard />
        <Footer />
      </div>
    </div>
  );
}
