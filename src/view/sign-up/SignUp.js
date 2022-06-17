import React from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import './signup.css';
import { BsCheckLg } from 'react-icons/bs';
import signupPoints from '../../assets/json/signup-points.json';

function Signup(params) {
  return (
    <Container>
      {
        <div className="split-container">
          <div className="left-pannel">
            <div className="container-with-header">
              <div className="header">
                <h3>Benefits of being a member</h3>
              </div>
              <div className="container-body">
                <ul class="singup-pointer">
                  {
                    signupPoints.map((points) =>
                      <li><span class="signup-point"><BsCheckLg /></span> {points}</li>
                    )
                  }
                </ul>

              </div>
            </div>
          </div>
          <div className="right-pannel">
            <h5>Sign up for an account
            </h5>
            <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password (4 characters minimum)</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>

              <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.

              </p>

              <input type="button" value="Signup" className="btn-primary" />
            </Form>


          </div>
        </div>
      }
    </Container>
  )
}

export default Signup;