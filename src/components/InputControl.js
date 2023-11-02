import React from "react";
import { Form, FormControl } from "react-bootstrap";

const InputControl = (props) => {
  return (
    <Form.Group>
      <Form.Label className="label">{props.label}</Form.Label>
      <FormControl type="text" {...props} />
    </Form.Group>
  );
};

export default InputControl;
