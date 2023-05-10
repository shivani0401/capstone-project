import React from "react";
import Navigator from "../Navigator/Navigator";
import workout from "./undraw_workout_gcgu.svg";
import Footer from "../Footer/Footer";
import WorkoutCard from "../WorkoutCard/WorkoutCard";

export default function HIIT() {
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
              marginTop: "100px",
              justifyContent: "left",
            }}
            width="150%"
            height="200%"
            src={workout}
            alt="meditation img"
          ></img>
          <div style={{ padding: "30px", color: "white" }}>
            <p>
              <b style={{ color: "#9c4479", fontSize: "22px" }}>HIIT </b> is a
              type of interval training exercise. It incorporates several rounds
              that alternate between several minutes of high intensity movements
              to significantly increase the heart rate to at least 80% of one's
              maximum heart rate, followed by short periods of lower intensity
              movements.
            </p>
            <p>
              The three stages of any workout still apply, regardless of how
              long or intense the session is: warm-up, exercise, cool-down.
              Stages one and three are non-negotiable. Skipping either could
              cause injury, stiffness and reduce the efficacy of your hard work
              in between.
            </p>
          </div>
        </div>

        <h5 style={{ color: "wheat" }}>
          List of <i style={{ color: "#9c4479", fontSize: "22px" }}>Popular </i>{" "}
          HIIT Exercises
        </h5>
        <WorkoutCard />

        <Footer />
      </div>
    </div>
  );
}
