import React, { Component } from "react";
import { login } from "../../auth/auth";

class Login extends Component {
  componentWillMount() {
    login();
  }

  render() {
    return (
      <div className="app-window"></div>
    );
  }
}

export default Login;