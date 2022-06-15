import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function Login(){
return(
    <Container>
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
    </Container>
)
}

export default Login;