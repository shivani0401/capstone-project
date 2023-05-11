import React from "react";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";
import img from "./banana-oatmeal-pancake.jpeg";
export default function Recipes() {
  return (
    <div style={{ backgroundColor: " #282c34" }}>
      <Navigator />
      <div
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "0px",
          backgroundColor: " #282c34",
        }}
      >
        <div>
          <div>
            <h4
              style={{
                fontSize: "24px",
                color: "white",
                justifyContent: "center",
              }}
            >
              Latest Recipe
            </h4>
          </div>
          <div className="responsive">
            <div
              class="gallery"
              style={{
                marginTop: "10px",
                marginLeft: "150px",
                height: "230px",
                width: "300px",
              }}
            >
              <img src={img} alt="recipe img" />
              <Link
                className=""
                to="#"
                style={{
                  fontSize: "20px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Banana Oatmeal pancake
              </Link>
              <div class="desc">Best For: Begginers</div>
              <Button variant="primary">View</Button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4
              style={{
                fontSize: "24px",
                color: "white",
                justifyContent: "end",
                marginTop: "20px",
              }}
            >
              Popular Searches
            </h4>
          </div>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateRows: "1fr 1fr",
              rowGap: "0px",
              backgroundColor: " #282c34",
            }}
          >
            <div className="responsive">
              <div
                class="gallery"
                style={{
                  marginTop: "10px",
                  marginLeft: "200px",
                  height: "80px",
                  width: "200px",
                }}
              >
                <Link
                  className=""
                  to="#"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  High Protein
                </Link>
                <div class="desc"></div>
                {/* <Button
                  variant="primary"
                  style={{ backgroundColor: "#9c4479" }}
                >
                  View
                </Button> */}
              </div>
            </div>
            <div className="responsive">
              <div
                class="gallery"
                style={{
                  marginTop: "10px",
                  marginLeft: "200px",
                  height: "80px",
                  width: "200px",
                }}
              >
                <Link
                  className=""
                  to="#"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Low carb
                </Link>
                <div class="desc"></div>
                {/* <Button
                  variant="primary"
                  style={{ backgroundColor: "#9c4479" }}
                >
                  View
                </Button> */}
              </div>
            </div>
            <div className="responsive">
              <div
                class="gallery"
                style={{
                  marginTop: "10px",
                  marginLeft: "200px",
                  height: "80px",
                  width: "200px",
                }}
              >
                <Link
                  className=""
                  to="#"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Dairy Free
                </Link>
                <div class="desc"></div>
                {/* <Button
                  variant="primary"
                  style={{ backgroundColor: "#9c4479" }}
                >
                  View
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 style={{ color: "white" }}>Easy Breakfafst ideas</h5>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "5px",
            backgroundColor: " #282c34",
          }}
        >
          <div>
            <div className="responsive">
              <div
                class="gallery"
                style={{
                  marginTop: "10px",
                  marginLeft: "150px",
                  height: "130px",
                  width: "300px",
                }}
              >
                <Link
                  className=""
                  to="#"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Recipe 1
                </Link>
                <div class="desc"></div>
                {/* <Button variant="primary" style={{ backgroundColor: "#9c4479" }}>
                View
              </Button> */}
              </div>
            </div>
          </div>
          <div>
            <div className="responsive">
              <div
                class="gallery"
                style={{
                  marginTop: "10px",
                  marginLeft: "0px",
                  height: "130px",
                  width: "300px",
                }}
              >
                <Link
                  className=""
                  to="#"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Recipe 2
                </Link>
                <div class="desc"></div>
                {/* <Button variant="primary" style={{ backgroundColor: "#9c4479" }}>
                View
              </Button> */}
              </div>
            </div>
          </div>
          <div>
            <div className="responsive">
              <div
                class="gallery"
                style={{
                  marginTop: "10px",
                  marginRight: "150px",
                  height: "130px",
                  width: "300px",
                }}
              >
                <Link
                  className=""
                  to="#"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Recipe 3
                </Link>
                <div class="desc"></div>
                {/* <Button variant="primary" style={{ backgroundColor: "#9c4479" }}>
                View
              </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
