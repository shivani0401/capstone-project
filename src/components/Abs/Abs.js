import React from "react";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import workout from "./undraw_working_out_re_nhkg.svg";
import "./style.css";
import { Link } from "react-router-dom";
export default function Abs() {
  const imgData = [
    {
      id: 1,
      title: "Plank",
      des: "The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
    },
    {
      id: 2,
      title: "Russian Twist",
      des: "The Russian twist is a simple abdominal exercise for working the core, shoulders, and hips.",
    },
    {
      id: 3,
      title: "Reverse Crunch",
      des: "The reverse crunch is even better than the standard crunch for strengthening your abs. The move keeps your muscles under tension for a longer period",
    },
    {
      id: 4,
      title: "Bicycle Crunch",
      des: "A study commissioned by the American Council on Exercise named this the best abs exercise because it provides the greatest stimulus to both abs and obliques.",
    },
    {
      id: 5,
      title: "Leg Raise",
      des: "Lie down flat on your back on the ground. Keeping your legs as straight as possible, raise them until they’re vertical or as close as you can get. Lower them and repeat.",
    },
    {
      id: 7,
      title: "Mountain Climbers",
      des: '“Start in a straight arm press-up position with one knee up between your elbows and only the back foot on the floor, Jump the back foot off the floor and swap it with the front foot."',
    },
    {
      id: 8,
      title: "Crunches",
      des: "Crunches are critical ab exercises since anyone can do it. Crunches are amazing for your trunk. While the main function of your core is to prevent movement.",
    },
    {
      id: 10,
      title: "Sit-up",
      des: "The sit-up is an abdominal endurance training exercise to strengthen, tighten and tone the abdominal muscles. It is similar to a crunch, but sit-ups have a fuller range of motion and condition additional muscles.",
    },
  ];

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

        <h5 style={{ color: "wheat" }}>List of Popular Abdominal Exercises</h5>
        <div className="img-gallery-container">
          <div>
            {imgData.map((item, index) => {
              return (
                <div className="responsive">
                  <div class="gallery">
                    <div className="img-card" key={index}>
                      {/* <img src={workout} /> */}
                      <div>
                        <Link
                          className=""
                          to="#"
                          style={{
                            fontSize: "30px",
                            textDecoration: "none",
                            fontWeight: "bold",
                            paddingBottom: "0px",
                          }}
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>

                    <div class="desc">{item.des}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
