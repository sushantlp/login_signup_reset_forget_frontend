import React from "react";
import _ from "lodash";

import { Container } from "semantic-ui-react/dist/commonjs";

// Component
import Signup from "./signupComponent/signup";
import Negative from "./negativeComponent/negative";
import Positive from "./positiveComponent/positive";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeMessage: false,
      negativeText: undefined,

      positiveMessage: false,
      positiveText: undefined
    };
  }

  componentWillReceiveProps(nextProp) {}

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
          Signup user
        </h1>

        {this.state.negativeMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Message negativeText={this.state.negativeText} />
          </Container>
        ) : null}

        {this.state.positiveMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Message positiveText={this.state.positiveText} />
          </Container>
        ) : null}

        <Signup
          //   userRecord={this.props.userRecord.userRecord}
          negativeFunction={this.negativeFunction}
          positiveFunction={this.positiveFunction}
        />
      </Container>
    );
  }
}
