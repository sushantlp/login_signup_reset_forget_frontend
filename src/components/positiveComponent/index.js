import React from "react";

import { Message } from "semantic-ui-react/dist/commonjs";

const Positive = props => {
  return (
    <Message positive>
      <Message.Header>Successful</Message.Header>
      <p>{props.positiveText}</p>
    </Message>
  );
};

export default Positive;
