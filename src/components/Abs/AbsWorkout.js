import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import fiveMins from "./5mins.svg";

export default function WorkoutCard() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <div>
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
              <img src={fiveMins} alt="" />Guided Meditation
            </Link>
            <div class="desc">
              Best For: Begginers
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Mantra Meditation
            </Link>
            <div class="desc">
              Best For: Improving Concentration
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Mindfulness Meditation
            </Link>
            <div class="desc">Best For: Reducing stress, busy people</div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Vipassana
            </Link>
            <div class="desc">Best For: Spiritual seekers</div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Loving Kindness Meditation
            </Link>
            <div class="desc">Best For: Developing compassion and kindness</div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Zen Meditation</Link>
            <div class="desc">
Best For: Stress management and fighting overwhelm</div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Transcendental Meditation
</Link>
            <div class="desc">
Best For: Improved awareness, stress relief and better sleep</div>
          </div>
        </div>
      </div>
      <div>
        <div class="responsive">
          <div class="gallery">
            <Link
              to="#"
              style={{
                fontSize: "20px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <img src={fiveMins} alt="" />
              Sound Bath Meditation
            </Link>
            <div class="desc">Best For: Improving concentration for everyyone</div>
          </div>
        </div>
      </div>

    </div>
  );
}
