import React from "react";
import { Button, Col,Form,Row } from "react-bootstrap";
import './signup.css';

function Signup(params) {
    return(

        <Row>
    <Col>
    
    <div style={{
        border: '2px red solid',
        borderRadius: '8px',
    }}>
     
     <div style={{
        backgroundColor: 'red',
        padding: '18px'
     }}>
        <h3>Benefits of being a member</h3>
     </div>



     <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>


    </div>
    
    
    
    
    </Col>
    <Col xs={9}>

    <div>
        <h3>Login to your account
</h3>

<span>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <a href="/">Click here</a> to get started.</span>
   <br></br>
   <br></br>


   <span>If you signed up but didn't get your verification email, <a href="/">click here</a> to have it resent.</span>
   
   <br></br>
   <br></br>

   <br></br>


   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


    </div>


    </Col>
    {/* <Col>3 of 3</Col> */}
  </Row>
    )
}

export default Signup;