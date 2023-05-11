import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function App() {
  return (
<div style={{margintop:"50px"}}>
<MDBFooter className='bg-dark text-center text-white'>
<p style={{fontSize:"14px"}}>BetterMent is a tool designed for workouts, meditation and healthy reciepes. which will help user follow <b style={{color:'#9c4479'}}>better</b> lifestyle </p>
        <div style={{fontSize:"12px"}}>
        <p style={{marginBottom:"0px"}}>Reach us at:</p>
          <MailOutlineOutlinedIcon/> <b>help@betterment.com</b>
          <br/>
          <CallOutlinedIcon/> <b>12345 12345</b>
          <br/>
          <LocationOnOutlinedIcon/> <b>356, abc sector, xyz.</b>

        </div>
          
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <p style={{fontSize:"14px"}}>BetterMent is a tool designed for workouts, meditation and healthy reciepes. which will help user follow <b style={{color:'#9c4479'}}>better</b> lifestyle </p>
          <div className=''>

          </div>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ fontSize:"12px", backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: BetterMent
      </div>
    </MDBFooter>
</div>    
  );
}