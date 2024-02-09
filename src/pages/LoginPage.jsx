import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/Loginservice';
import './LoginPage.css';


const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('user1@gmail.com');
  const [password, setPassword] = useState('Mdpprom15');
  const navigate = useNavigate();


  const handleLogin = () => {
    LoginService.check(email, password)
      .then(() => {
        setTimeout(() => {
          if (localStorage.getItem('token') !== null) {
            navigate('/');
          } else {

          }
        }, 500); // 1000 milliseconds = 1 second
      })
      .catch(error => {
        console.error("Login failed:", error);

      });
  };

  const cardStyles = {
    background: '#fbfbfb',
    boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.5)',
    height: '410px',
    margin: '6rem auto 8.1rem auto',
    padding: '15px',
    width: '450px',
  };

  return (
    <div className="row w=100 mx-0 aut-page">
      <div >
        <div className="card mt-5" style={cardStyles}>
          <div className="row">
            <div className="auth-form-wrapper px-4 py-5">
              <div className="noble-ui-logo d-block mb-4">
                <h1>Welcome<span> Back!</span></h1>
              </div>
              <Form>
                <Form.Group controlId="formUsername" >
                  <label htmlFor="userEmail" className="form-label">
                    Email
                  </label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    value="user1@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%',marginBottom:'20px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <label htmlFor="userPassword" className="form-label mt-3">
                    Password
                  </label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value="Mdpprom15"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', marginBottom: '20px' }}
                  />
                </Form.Group>

                <div style={{ width:"fit-content", marginLeft:"auto", marginRight:"auto",marginTop: "25px" }}>
                  <Button variant="primary" onClick={handleLogin}>
                    Se connecter
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
