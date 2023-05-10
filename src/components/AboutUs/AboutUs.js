import react from 'react';
import teamlogo from './teamlogo.png';
import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';


function AboutUs () {
    let message ='Excersices,recipes and mindfulness practices that will help you on your road to healthy living,weight loss and stress relief.'
    return (
        <div>
        <Navigator/>
        <div>
            
        </div>
    
        
        <section className="section-white">
            <div className="container">
                <div className="row"></div>
                <div className="col-md-12 text-center">
                    <h2 className="section-title">
                        BUILD YOUR HEALTH WITH US
                    </h2>
                    <p className="section-subtitle">{message}</p>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="team-item">

                    <img style={{ display:"block",margintop:"40px" }}width="800px" height="400px" src= { teamlogo } className="team-img" alt="pic" />
                       
                    </div>
                </div>

                <form id='form' className='text-align right' style={{ width: '100%', maxWidth: '300px', flexbox:"right-align" }}>
      <h2>CONTACT US</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />  
      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>   
            </div>
        </section>
        <Footer/>
        </div>


        
    )
}

export default AboutUs;