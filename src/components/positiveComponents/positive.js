import React from "react";

import { Message } from "semantic-ui-react/dist/commonjs";

const Positive = props => {
  return (
    <Message>
      <Message.Header>Successful</Message.Header>
      <p>{props.successText}</p>
    </Message>
  );
};

export default Positive;
