import React, { useState } from "react";
import { Button, Col, Form, Row, Container, Alert } from "react-bootstrap";
import './signup.css';
import { BsCheckLg } from 'react-icons/bs';
import signupPoints from '../../assets/json/signup-points.json';
import { useNavigate } from "react-router-dom";


function Signup(props) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [conifPassword, setConifPassword] = useState();
  const [email, setEmail] = useState();

  const [error, setError] = useState();
  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      var users = JSON.parse(localStorage.getItem('users')) ?? [];
      var hasMatch = false;

      for (var index = 0; index < users.length; index++) {
        var user = users[index];
        if (user.username === username) {
          hasMatch = true;
          setError("Username already exists. please choose another username")
          break;
        }
      }

      if (!hasMatch) {
        users.push({
          'username': username,
          'password': password,
          'email': email
        })
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/');
      }
    }
  }


  function validateForm() {
    if (password !== conifPassword) {
      setError('Confirm password not matched');
      return false;
    }
    return true;
  }


  return (
    <div className="content">
      <div className="content-wrapper">
        {
          (error != null) && <div className="alertView">
            <Alert key='error' variant="danger" dismissible onClose={() => setError(null)}>
              {error}
            </Alert>
          </div>
        }
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
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="" required onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password (4 characters minimum)</Form.Label>
                  <Form.Control type="password" placeholder="" required onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="" required onChange={(e) => setConifPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" required onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>

                <input type="submit" value="Signup" className="btn-primary" />
              </Form>


            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Signup;