import React, { useState } from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }


  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };


  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="auth-form-wrapper px-4 py-5">
        <div className="noble-ui-logo d-block mb-2">
          ADMIN<span>Panel</span>
        </div>
        <form className="forms-sample" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              placeholder="example@example.com"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              autoComplete="current-password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary me-2 mb-2 mb-md-0 text-white">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
