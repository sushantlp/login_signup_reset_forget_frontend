import React from "react";
import { Link } from "react-router-dom";

import { Button, Input } from "semantic-ui-react/dist/commonjs";

import "./static/css/forget.css";

const EMAIL_REG = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export default class Forget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      forgetLoading: false,
      forgetButton: true,
      userEmail: ""
    };
  }

  componentWillReceiveProps(nextProp) {
    console.log(this.props);
    console.log(nextProp);
    if (
      this.props.forgetReducer !== nextProp.forgetReducer &&
      nextProp.forgetReducer.status !== "START"
    ) {
      if (nextProp.forgetReducer.status === "SUCCESS") {
        // Call Error Message
        this.props.positiveFunction(true, nextProp.forgetReducer.msg);
        this.allStateUpdate(false);
      } else {
        // Call Error Message
        this.props.negativeFunction(true, nextProp.forgetReducer.msg);
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

        forgetLoading: true,
        forgetButton: true
      });
    } else {
      // Update State
      this.setState({
        email: false,

        forgetLoading: false,
        forgetButton: false
      });
    }
  };
  checkButtonActive = () => {
    if (this.state.userEmail !== "" && this.state.userEmail !== undefined) {
      this.setState({
        forgetButton: false
      });
    } else {
      this.setState({
        forgetButton: true
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

  // Button Click Call
  forgetClick = () => {
    if (this.state.userEmail === "" || this.state.userEmail === undefined) {
      // Call Error Message
      this.props.negativeFunction(true, "Please fill email");
    } else {
      // Validate Email
      if (!EMAIL_REG.test(this.state.userEmail)) {
        // Call Error Message
        this.props.negativeFunction(true, "Invalid Email");

        return;
      } else {
        this.allStateUpdate(true);
        this.props.callForgetAction(this.state.userEmail);
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

        <Button
          disabled={this.state.forgetButton}
          loading={this.state.forgetLoading}
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
          onClick={() => this.forgetClick()}
        >
          Forget Password
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
