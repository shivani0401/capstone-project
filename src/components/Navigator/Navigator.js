import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Navigate, redirect } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Navigator() {
  const logout=()=>{
    //redirect(url:'http://localhost:3000/login/');
  }
  return (
 <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className='navbar-brand' to="/">BetterMent</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/meditation" style={{fontSize:"18px",textDecoration:"none", color:"white", margin:"10px", padding:"10px"}}>Meditation</Link>
            <NavDropdown style={{ alignContent:'center', fontSize:"18px", textDecoration:"none", color:"white", padding:"10px", display:'table-column-group'}} title="Workout Programs" bg="dark" id="collasible-nav-dropdown">
              <Link to="/yoga" style={{ fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>Yoga</Link>
              <hr/>
              <Link to="/hiit" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>HIIT</Link>
              <hr/>
              <Link to="/pilates" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>Pilates</Link>
              <hr/>
              <Link to="/abs" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>Abs Workout</Link>
            </NavDropdown>
            <Link to="/recipes" style={{fontSize:"18px",textDecoration:"none", color:"white", margin:"10px", padding:"10px"}}>Recipes</Link>
            <Link to="/aboutus" style={{fontSize:"18px",textDecoration:"none", color:"white", margin:"10px", padding:"10px"}}>About</Link>
          </Nav>
          <Nav>
            <Button variant="dark" style={{fontSize:"14px"}} onClickCapture={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>


 </div>
  );
}
