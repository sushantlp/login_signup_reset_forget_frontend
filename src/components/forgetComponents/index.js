import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

// Component
import Forget from "./forgetComponent/forget";
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

  callForgetAction = userEmail => {
    this.props.postForget(userEmail);
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
          Forget Password
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

        <Forget
          forgetReducer={this.props.forgetReducer}
          negativeFunction={this.negativeFunction}
          positiveFunction={this.positiveFunction}
          callForgetAction={this.callForgetAction}
          parentState={this.state}
        />
      </Container>
    );
  }
}
