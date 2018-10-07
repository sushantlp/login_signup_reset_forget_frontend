import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "semantic-ui-react/dist/commonjs";

import "./static/css/reset.css";

export default class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: false,
      password: false,

      resetLoading: false,
      resetButton: true,

      userConfirmPassword: "",
      userPassword: ""
    };
  }

  componentWillReceiveProps(nextProp) {
    if (
      this.props.resetReducer !== nextProp.resetReducer &&
      nextProp.resetReducer.status !== "START"
    ) {
      if (nextProp.resetReducer.status === "SUCCESS") {
        // Call Error Message
        this.props.positiveFunction(true, nextProp.resetReducer.msg);
        this.allStateUpdate(false);
      } else {
        // Call Error Message
        this.props.negativeFunction(true, nextProp.resetReducer.msg);
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
        confirmPassword: true,
        password: true,

        resetLoading: true,
        resetButton: true
      });
    } else {
      // Update State
      this.setState({
        confirmPassword: false,
        password: false,

        resetLoading: false,
        resetButton: false
      });
    }
  };
  checkButtonActive = () => {
    if (
      this.state.userConfirmPassword !== "" &&
      this.state.userConfirmPassword !== undefined &&
      this.state.userPassword !== "" &&
      this.state.userPassword !== undefined
    ) {
      this.setState({
        resetButton: false
      });
    } else {
      this.setState({
        resetButton: true
      });
    }
  };

  // Confirm Password Update
  confirmPasswordHandleChange = (event, data) => {
    this.checkMessageActive();
    this.setState(
      {
        userConfirmPassword: data.value
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
  resetClick = () => {
    if (
      this.state.userConfirmPassword === "" ||
      this.state.userConfirmPassword === undefined
    ) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill confirm password");
    } else if (
      this.state.userPassword === "" ||
      this.state.userPassword === undefined
    ) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill password");
    } else {
      if (this.state.userPassword !== this.state.userConfirmPassword) {
        // Call Error Message
        this.props.negativeFunction(true, "Password did not match");

        return;
      } else {
        this.allStateUpdate(true);
        this.props.callResetAction(this.state.userPassword);
      }
    }
  };

  render() {
    return (
      <div>
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

        <Input
          disabled={this.state.confirmPassword}
          type="password"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Confirm Password..."
          value={this.state.userConfirmPassword}
          onChange={(event, data) =>
            this.confirmPasswordHandleChange(event, data)
          }
        />

        <Button
          disabled={this.state.resetButton}
          loading={this.state.resetLoading}
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
          onClick={() => this.resetClick()}
        >
          Reset Password
        </Button>

        <Link to="/signup">
          <p className="Signup">New to? Sign up</p>
        </Link>

        <Link to="/login">
          <p className="Login">Login</p>
        </Link>
      </div>
    );
  }
}
