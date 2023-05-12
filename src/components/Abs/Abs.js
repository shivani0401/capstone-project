import React from "react";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import workout from "./undraw_working_out_re_nhkg.svg";
import "./style.css";
import { Link } from "react-router-dom";
export default function Pilates() {
  const imgData = [
    {
      id: 1,
      title: "dog",
    },
    {
      id: 2,
      title: "coding..coding...",
    },
    {
      id: 3,
      title: "ginni pig",
    },
    {
      id: 4,
      title: "flower",
    },
    {
      id: 5,
      title: "sun set",
    },
    {
      id: 6,
      title: "yeee...clap clap",
    },
    {
      id: 7,
      title: "mountain",
    },
    {
      id: 8,
      title: "Wind farm",
    },
    {
      id: 10,
      title: "magic.",
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
          <div
            style={{
              webkitColumnCount: "3",
              mozColumnCount: "3",
              columnCount: "3",
              webkitColumnWidth: "100%",
              mozColumnWidth: "100%",
              columnWidth: "100%",
              marginLeft: "8rem",
              marginRight: "8rem",
              textAlign: "center",
            }}
          >
            {imgData.map((item, index) => {
              return (
                <div className="responsive">
                  <div class="gallery">
                    <Link
                      className=""
                      to="#"
                      style={{
                        fontSize: "20px",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      <div className="img-card" key={index}>
                        <img />
                        <div>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                    </Link>
                    <div class="desc">Best For: Begginers</div>
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
