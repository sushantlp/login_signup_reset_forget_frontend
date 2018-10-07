import React from "react";
import { Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react/dist/commonjs";

// Component
import Reset from "./resetComponent/reset";
import Negative from "../negativeComponent";
import Positive from "../positiveComponent";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeMessage: false,
      negativeText: undefined,

      positiveMessage: false,
      positiveText: undefined,

      hash: undefined
    };
  }

  componentWillMount() {
    if (this.props.location.search !== undefined) {
      const search = this.props.location.search; //?logic=$2a$10$q3po3whcOlK0dcr8UeF10uhIzHxA8ZR5FM5Rwqy5fd43HGYHQdM6y

      const take = search.split("?logic=");

      this.setState({
        hash: take[1]
      });
    } else {
      return <Redirect to="/login" />;
    }
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

  callResetAction = userPassword => {
    this.props.postReset(this.state.hash, userPassword);
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
          Reset Password
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

        <Reset
          resetReducer={this.props.resetReducer}
          negativeFunction={this.negativeFunction}
          positiveFunction={this.positiveFunction}
          callResetAction={this.callResetAction}
          parentState={this.state}
        />
      </Container>
    );
  }
}
