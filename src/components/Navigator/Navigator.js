import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function Navigator() {
  return (
 <div>
         <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className='navbar-brand' to="/">BetterMent</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/meditation" style={{fontSize:"18px",textDecoration:"none", color:"grey", margin:"10px", padding:"10px"}}>Meditation</Link>
            <NavDropdown style={{fontSize:"18px",textDecoration:"none", color:"grey", padding:"10px"}} title="Workout Programs" bg="dark" id="collasible-nav-dropdown">
              <Link to="" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>Yoga</Link>
              <hr/>
              <Link to="" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>HIIT</Link>
              <hr/>
              <Link to="" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>Pilates</Link>
              <hr/>
              <Link to="" style={{fontSize:"18px",textDecoration:"none", color:"black", margin:"10px", padding:"10px"}}>Abs Workout</Link>
            </NavDropdown>
            <Link to="" style={{fontSize:"18px",textDecoration:"none", color:"grey", margin:"10px", padding:"10px"}}>Recipes</Link>
            <Link to="" style={{fontSize:"18px",textDecoration:"none", color:"grey", margin:"10px", padding:"10px"}}>About</Link>
          </Nav>
          <Nav>
            <Button variant="dark">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>


 </div>
  );
}
