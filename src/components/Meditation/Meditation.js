import React from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
//import medimg from "./meditation.png";
import mindfulness from "./mindfulness.svg";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";

export default function Meditation() {
  return (
    <div style={{backgroundColor:'#282c34'}}>
      <Navigator />
      <div style={{display:'grid', alignItems:'center', gridTemplateColumns:'0.2fr 1fr', columnGap:'5px', backgroundColor:" #282c34"}}>
      <img
        style={{ display: "block", marginTop: "100px", justifyContent:'left'}}
        width="100%"
        height="100%"
        src={mindfulness}
        alt="meditation img"
      ></img>
      <div style={{padding:'30px', color:'white'}}>
      <p>
        <b style={{color:'#9c4479', fontSize:'22px'}}>Meditation </b> has been practiced for thousands of years. Meditation
        originally was meant to help deepen understanding of the sacred and
        mystical forces of life. These days, meditation is commonly used for
        relaxation and stress reduction. 
         
      </p>
      <p>Meditation is considered a type of
        mind-body complementary medicine. Meditation can produce a deep state of
        relaxation and a tranquil mind.</p>
        <p>During meditation, you focus your
        attention and eliminate the stream of jumbled thoughts that may be
        crowding your mind and causing stress. This process may result in
        enhanced physical and emotional well-being.</p>
      </div>
    </div>
      
      <h5 style={{color:'wheat'}}>List of <i style={{color:'#9c4479', fontSize:'22px'}}>Popular</i> Meditations</h5>
      <WorkoutCard/>
      <Footer />
    </div>
  );
}
