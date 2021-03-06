import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "semantic-ui-react/dist/commonjs";

import "./static/css/login.css";

const EMAIL_REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      password: false,

      loginLoading: false,
      loginButton: true,

      userEmail: "",
      userPassword: ""
    };
  }

  componentWillReceiveProps(nextProp) {
    if (
      this.props.loginReducer !== nextProp.loginReducer &&
      nextProp.loginReducer.status !== "START"
    ) {
      if (nextProp.loginReducer.status === "SUCCESS") {
        // Call Error Message
        this.props.positiveFunction(true, nextProp.loginReducer.msg);
        this.allStateUpdate(false);
      } else {
        // Call Error Message
        this.props.negativeFunction(true, nextProp.loginReducer.msg);
        this.allStateUpdate(false);
      }
    }
  }

  checkMessageActive = () => {
    if (this.props.parentState.negativeMessage) {
      // Call Error Message
      this.props.negativeFunction(false, "");
    }

    if (this.props.parentState.positiveMessage) {
      // Call Error Message
      this.props.positiveFunction(false, "");
    }
  };

  allStateUpdate = status => {
    if (status) {
      // Update State
      this.setState({
        email: true,
        password: true,

        loginLoading: true,
        loginButton: true
      });
    } else {
      // Update State
      this.setState({
        email: false,
        password: false,

        loginLoading: false,
        loginButton: false
      });
    }
  };
  checkButtonActive = () => {
    if (
      this.state.userEmail !== "" &&
      this.state.userEmail !== undefined &&
      this.state.userPassword !== "" &&
      this.state.userPassword !== undefined
    ) {
      this.setState({
        loginButton: false
      });
    } else {
      this.setState({
        loginButton: true
      });
    }
  };

  // Email Update
  emailHandleChange = (event, data) => {
    this.checkMessageActive();
    this.setState(
      {
        userEmail: data.value
      },
      function() {
        this.checkButtonActive();
      }
    );
  };

  // Password Update
  passwordHandleChange = (event, data) => {
    this.checkMessageActive();
    this.setState(
      {
        userPassword: data.value
      },
      function() {
        this.checkButtonActive();
      }
    );
  };

  // Button Click Call
  loginClick = () => {
    if (this.state.userEmail === "" || this.state.userEmail === undefined) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill email");
    } else if (
      this.state.userPassword === "" ||
      this.state.userPassword === undefined
    ) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill password");
    } else {
      // Validate Email
      if (!EMAIL_REG.test(this.state.userEmail)) {
        // Call Error Message
        this.props.negativeFunction(true, "Invalid Email");

        return;
      } else {
        this.allStateUpdate(true);
        this.props.callLoginAction(
          this.state.userEmail,
          this.state.userPassword
        );
      }
    }
  };

  render() {
    return (
      <div>
        <Input
          disabled={this.state.email}
          type="text"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Email..."
          value={this.state.userEmail}
          onChange={(event, data) => this.emailHandleChange(event, data)}
        />

        <Input
          disabled={this.state.password}
          type="password"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Password..."
          value={this.state.userPassword}
          onChange={(event, data) => this.passwordHandleChange(event, data)}
        />

        <Button
          disabled={this.state.loginButton}
          loading={this.state.loginLoading}
          style={{
            backgroundColor: "#FF5A5F",
            color: "white",
            opacity: "1",
            width: "450px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "500",
            marginTop: "30px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "30px"
          }}
          onClick={() => this.loginClick()}
        >
          Login
        </Button>

        <Link to="/signup">
          <p className="Signup">New to? Sign up</p>
        </Link>

        <Link to="/forget">
          <p className="Forget">Forget Password</p>
        </Link>
      </div>
    );
  }
}
