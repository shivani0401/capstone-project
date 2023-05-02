import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './style.css'
export default function WorkoutCard() {
  return (
<>    <div>
<p style={{backgroundColor:" #282c34"}}>Some Featured containt</p>
       
      <div className="responsive">
        <div class="gallery">
        <Link to="#" style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold"}}>
          5 min meditation challenge
        </Link>          
        <div class="desc">Add a description of the image here</div>
        </div>
      </div>
    </div>
    <div>
    <div class="responsive">
      <div class="gallery">
      <Link to="#" style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold"}}>
          10 min meditation challenge
        </Link>          
<div class="desc">Add a description of the image here</div>
      </div>
    </div>
  </div>
  <div>
  <div class="responsive">
    <div class="gallery">
    <Link to="#" style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold"}}>
          15 min meditation challenge
        </Link>          
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
</div>
<div>
      <div class="responsive">
        <div class="gallery">
        <Link to="#" style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold"}}>
          25 min meditation challenge
        </Link>          
<div class="desc">Add a description of the image here</div>
        </div>
      </div>
    </div>
    </>
  )
}
