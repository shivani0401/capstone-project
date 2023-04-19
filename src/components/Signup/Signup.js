import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Signup() {
  return (
    <div>
      <h4>Signup</h4>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="First Name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Last Name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted" style={{fontSize:"15px"}}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <hr/>
        <GoogleIcon style={{margin: "8px"}} />
        <FacebookIcon style={{margin: "8px"}}/>
        <LinkedInIcon style={{margin: "8px"}}/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted">Existing user?</Form.Text>
          <a href="login.js" style={{ color: "red", fontSize: "15px", margin:"5px" }}>
            Login here !
          </a>
        </Form.Group>
      </Form>
    </div>
  );
}
