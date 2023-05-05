import React from 'react'
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import medimg from './meditation.png'
import mindfulness from './mindfulness.svg'
import Navigator from '../Navigator/Navigator'
import Footer from '../Footer/Footer'

export default function Meditation() {
  return (
    <div>
      <Navigator/>
      <img style={{ display:"block", marginTop:"100px"}} width="300px" height="150px" src={mindfulness} alt="meditation img"></img>
      <h4>List of meditations</h4>
      <WorkoutCard/>
      <Footer/>
    </div>
  )
}
