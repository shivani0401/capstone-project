import react from "react";
import teamlogo from "./undraw_teamwork_hpdk.svg";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

function AboutUs() {
  return (
    <div>
      <div style={{ backgroundColor: "#282c34" }}>
        <Navigator />
        <h5 style={{color:"white", paddingTop:"40px", fontSize:'15px'}}>'Excersices, recipes and mindfulness practices that will help you on your road to healthy living, weight loss and stress relief.'</h5>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "0.3fr 1fr",
            columnGap: "5px",
            backgroundColor: "#282c34",
          }}
        >
          <img
            style={{
              display: "block",
              marginTop: "100px",
              justifyContent: "left",
            }}
            width="200%"
            height="200%"
            src={teamlogo}
            alt="meditation img"
          ></img>
          <div style={{ padding: "30px", color: "white" }}>
            <form
              id="form"
              className="text-align right"
              style={{
                width: "100%",
                maxWidth: "300px",
                marginLeft:"400px"
              }}
            >
              <h5>CONTACT US</h5>

              <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />
              <MDBInput
                type="email"
                label="Email address"
                v-model="email"
                wrapperClass="mb-4"
              />
              <MDBInput label="Subject" type="" v-model="subject" wrapperClass="mb-4" />
              <MDBCheckbox
                wrapperClass="d-flex justify-content-center"
                label="Send me copy"
              />
              <MDBBtn style={{backgroundColor:"#9c4479"}} block className="my-4">
                Send
              </MDBBtn>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
