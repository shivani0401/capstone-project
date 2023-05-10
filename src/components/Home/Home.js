import React from 'react'
import 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Navigator from '../Navigator/Navigator'
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import Footer from '../Footer/Footer'
import img1 from './1.svg'
import img2 from './2.svg'
import img3 from './3.svg'
import Featured from '../Featured/Featured';
export default function Home() {
  return (
    <div>
      <Navigator/>
      <Carousel style={{backgroundColor:"#282c34"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          width="100%"
          height="400px"
          style={{marginBottom:"50px"}}
        />
        <Carousel.Caption>
          <h3>Social Wellbeing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          width="100%"
          height="300px"
          style={{marginBottom:"150px"}}

        />

        <Carousel.Caption>
          <h3>Excercises For Better You</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="img3"
          width="100%"
          height="400px"
          style={{marginBottom:"50px"}}
        />

        <Carousel.Caption>
          <h3>Focus on Your Mental Health</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Featured/>
      <Footer/>
    </div>
  )
}
