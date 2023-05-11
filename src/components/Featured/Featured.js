import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import fiveMins from './5mins.svg';

export default function Featured() {
  return (
    <div>
            <div>
           <h5 style={{backgroundColor:'#282c34', marginBottom:'0px', color:'white', fontSize:'14px'}}>Featured</h5>
       <div className="responsive">

         <div class="gallery">
         <Link to="#" style={{fontSize:"20px", textDecoration:"none", fontWeight:"bold"}}>
           <img src={fiveMins} alt='' />
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
          <img src={fiveMins} alt='' />
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
     <img src={fiveMins} alt=''/>
 
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
            <img src={fiveMins} alt=''/>
           25 min meditation challenge
         </Link>          
 <div class="desc">Add a description of the image here</div>
         </div>
       </div>
     </div>
 
    </div>
  )
}
