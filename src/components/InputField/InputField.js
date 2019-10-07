import React from 'react';

import {Form} from 'react-bootstrap';

const InputField = ({fieldName, type}) => {
  return(
      <Form.Group controlId={{fieldName}}>
        <Form.Label>{fieldName}</Form.Label>
        <Form.Control type={{type}} name={{fieldName}} placeholder={`Please enter your ${fieldName}`}/>
      </Form.Group>
  )
}

export default InputField;