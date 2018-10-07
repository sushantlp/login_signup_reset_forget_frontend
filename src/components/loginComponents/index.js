import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

// Component
import Login from "./loginComponent/login";
import Negative from "../negativeComponent";
import Positive from "../positiveComponent";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeMessage: false,
      negativeText: undefined,

      positiveMessage: false,
      positiveText: undefined
    };
  }

  negativeFunction = (flag, text) => {
    this.setState({
      negativeMessage: flag,
      negativeText: text
    });
  };

  positiveFunction = (flag, text) => {
    this.setState({
      positiveMessage: flag,
      positiveText: text
    });
  };

  callLoginAction = (userEmail, userPassword) => {
    this.props.postLogin(userEmail, userPassword);
  };

  render() {
    return (
      <Container>
        <h1
          style={{
            color: "#7a52c0",
            textAlign: "center",
            fontSize: "35px",
            paddingTop: "70px",
            paddingBottom: "40px"
          }}
        >
          Login
        </h1>

        {this.state.negativeMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Negative negativeText={this.state.negativeText} />
          </Container>
        ) : null}

        {this.state.positiveMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Positive positiveText={this.state.positiveText} />
          </Container>
        ) : null}

        <Login
          loginReducer={this.props.loginReducer}
          negativeFunction={this.negativeFunction}
          positiveFunction={this.positiveFunction}
          callLoginAction={this.callLoginAction}
          parentState={this.state}
        />
      </Container>
    );
  }
}
