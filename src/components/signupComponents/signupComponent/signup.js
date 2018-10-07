import React from "react";
import _ from "lodash";

import { Button, Input, Radio } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/signup.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      email: false,
      password: false,
      confirmPassword: false,

      signupLoading: false,
      signupButton: false,

      userName: "",
      userEmail: "",
      userPassword: "",
      userConfirmPassword: ""
    };
  }

  componentWillMount() {
    // if (!_.isEmpty(this.props.userRecord)) {
    //   if (
    //     this.props.userRecord.First_Name !== null &&
    //     this.props.userRecord.First_Name !== undefined
    //   ) {
    //     this.setState({
    //       userFirstName: this.props.userRecord.First_Name
    //     });
    //   }
    //   if (
    //     this.props.userRecord.Last_Name !== null &&
    //     this.props.userRecord.Last_Name !== undefined
    //   ) {
    //     this.setState({
    //       userLastName: this.props.userRecord.Last_Name
    //     });
    //   }
    //   if (
    //     this.props.userRecord.Sex !== null &&
    //     this.props.userRecord.Sex !== undefined
    //   ) {
    //     this.setState({
    //       userGender: this.props.userRecord.Sex
    //     });
    //   } else {
    //     this.setState({
    //       userGender: "male"
    //     });
    //   }
    //   if (
    //     this.props.userRecord.Dob !== null &&
    //     this.props.userRecord.Dob !== undefined
    //   ) {
    //     this.setState({
    //       userDob: this.props.userRecord.Dob
    //     });
    //   }
    // }
  }

  componentWillReceiveProps(nextProp) {
    // if (
    //   this.props.updateUserRecord.signal !== nextProp.updateUserRecord.signal
    // ) {
    //   if (nextProp.updateUserRecord.signal) {
    //     this.props.goCheckoutRoute();
    //   } else {
    //     // State Update
    //     this.setState({
    //       firstName: false,
    //       lastName: false,
    //       dob: false,
    //       gender: false,
    //       signupLoading: false,
    //       signupButton: false
    //     });
    //     // Call Error Message
    //     this.props.errorMessage(true, nextProp.updateUserRecord.msg);
    //   }
    // }
  }

  // Name Update
  nameHandleChange = (event, data) => {
    this.setState({
      userName: data.value
    });
  };

  // Email Update
  emailHandleChange = (event, data) => {
    this.setState({
      userEmail: data.value
    });
  };

  // Password Update
  passwordHandleChange = (event, data) => {
    this.setState({
      userPassword: data.value
    });
  };

  // Confirm Password Update
  confirmPasswordHandleChange = (event, data) => {
    this.setState({
      userConfirmPassword: data.value
    });
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
      // Update State
      this.setState({
        firstName: true,
        lastName: true,
        dob: true,
        gender: true,
        signupLoading: true,
        signupButton: true
      });
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
          type="text"
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
          type="text"
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
          Next
        </Button>
      </div>
    );
  }
}
