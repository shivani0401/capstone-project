import React from "react";
import Navigator from "../Navigator/Navigator";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import workout from "./undraw_stability_ball_b-4-ia.svg";
import Footer from "../Footer/Footer";

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
              marginTop: "10px",
              justifyContent: "left",
            }}
            width="120%"
            height="100%"
            src={workout}
            alt="meditation img"
          ></img>
          <div style={{ padding: "30px", color: "white" }}>
            <p>
              <b style={{ color: "#9c4479", fontSize: "22px" }}>Pilates </b> is
              a low impact exercise comprising controlled movements that enhance
              your balance, core strength, mobility, flexibility, and even mood.
              It focuses on the smaller and deeper muscles that support your
              structure and enhance your overall health
            </p>
            <p>
              It affects your stability, balance, and posture, facilitating
              everyday activities like bending down, twisting to grab something,
              lifting heavy objects, or even playing sports that require core
              strength.
            </p>
          </div>
        </div>

        <h5 style={{ color: "wheat" }}>
          List of <i style={{ color: "#9c4479", fontSize: "22px" }}>Popular </i>{" "}
          Pilates Exercises
        </h5>
        <WorkoutCard/>
        <Footer />
      </div>
     

      
    </div>
  );
}
