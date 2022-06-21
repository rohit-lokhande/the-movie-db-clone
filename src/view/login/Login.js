import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, updateAuthStatus } from "../../redux/action/auth-action";
import './style.css'
import { useNavigate } from "react-router-dom";

function Login() {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();



  const onUsernameUpdate = (e) => {
    setUsername(e.target.value);

  }

  const onPasswordUpdate = (e) => {
    setPassword(e.target.value);

  }

  const onLoginClick = () => {



    const user = login(username, password);
    if(user != null && user.error == null){
      dispatch(updateAuthStatus());
      navigate(-1);
    }else{
setError(user.error)
    }


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
  
  <div className="login-container">

  <h5>Login to your account</h5>

  <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <a href="/signup">Click here</a> to get started.</p>
  <p>If you signed up but didn't get your verification email, <a href="#">click here</a> to have it resent.</p>

  <br></br>

  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="" onChange={onUsernameUpdate} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="" onChange={onPasswordUpdate} />
    </Form.Group>
    <input type="button" value="Login" onClick={onLoginClick} className="btn-primary" />
  </Form>
</div>  
      }
    </div>
  </div>
  
  )
}

export default Login;