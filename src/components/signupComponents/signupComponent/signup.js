import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "semantic-ui-react/dist/commonjs";

import "./static/css/signup.css";

const EMAIL_REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      email: false,
      password: false,
      confirmPassword: false,

      signupLoading: false,
      signupButton: true,

      userName: "",
      userEmail: "",
      userPassword: "",
      userConfirmPassword: ""
    };
  }

  componentWillReceiveProps(nextProp) {
    if (
      this.props.signupReducer !== nextProp.signupReducer &&
      nextProp.signupReducer.status !== "START"
    ) {
      if (nextProp.signupReducer.status === "SUCCESS") {
        // Call Error Message
        this.props.positiveFunction(true, nextProp.signupReducer.msg);
        this.allStateUpdate(false);
      } else {
        // Call Error Message
        this.props.negativeFunction(true, nextProp.signupReducer.msg);
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
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        signupLoading: true,
        signupButton: true
      });
    } else {
      // Update State
      this.setState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
        signupLoading: false,
        signupButton: false
      });
    }
  };
  checkButtonActive = () => {
    if (
      this.state.userName !== "" &&
      this.state.userName !== undefined &&
      this.state.userEmail !== "" &&
      this.state.userEmail !== undefined &&
      this.state.userPassword !== "" &&
      this.state.userPassword !== undefined &&
      this.state.userConfirmPassword !== "" &&
      this.state.userConfirmPassword !== undefined
    ) {
      this.setState({
        signupButton: false
      });
    } else {
      this.setState({
        signupButton: true
      });
    }
  };

  // Name Update
  nameHandleChange = (event, data) => {
    this.checkMessageActive();

    this.setState(
      {
        userName: data.value
      },
      function() {
        this.checkButtonActive();
      }
    );
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

  // Button Click Call
  otpSignupClick = () => {
    if (this.state.userName === "" || this.state.userName === undefined) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill name");
    } else if (
      this.state.userEmail === "" ||
      this.state.userEmail === undefined
    ) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill email");
    } else if (
      this.state.userPassword === "" ||
      this.state.userPassword === undefined
    ) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill password");
    } else if (
      this.state.userConfirmPassword === "" ||
      this.state.userConfirmPassword === undefined
    ) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill confirm password");
    } else {
      // Validate Email
      if (!EMAIL_REG.test(this.state.userEmail)) {
        // Call Error Message
        this.props.negativeFunction(true, "Invalid Email");

        return;
      } else if (this.state.userPassword !== this.state.userConfirmPassword) {
        // Call Error Message
        this.props.negativeFunction(true, "Password did not match");

        return;
      } else {
        this.allStateUpdate(true);
        this.props.callSignupAction(
          this.state.userName,
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
          disabled={this.state.name}
          type="text"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Name..."
          value={this.state.userName}
          onChange={(event, data) => this.nameHandleChange(event, data)}
        />

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
          disabled={this.state.signupButton}
          loading={this.state.signupLoading}
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
          onClick={() => this.otpSignupClick()}
        >
          Signup
        </Button>

        <Link to="/login">
          <p className="Anchor">Existing User? Log in</p>{" "}
        </Link>
      </div>
    );
  }
}
