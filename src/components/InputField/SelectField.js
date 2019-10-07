import React from 'react';

import {Form} from 'react-bootstrap';

const SelectField = () => {
  return(
      <Form.Group>
        <Form.Label>Position are you applying for</Form.Label>
        <a href="/" tabIndex="0" className="popover-link rounded-circle pl-1" id="example" role="button" data-toggle="popover" data-trigger="focus" title="Please applying your" data-content="Please select your position"><i className="fas fa-question-circle" ></i></a>
        <Form.Control as="select">
                <option defaultChecked>Position are you applying for</option>
                <option defaultValue="1">Junior</option>
                <option defaultValue="2">Middle</option>
                <option defaultValue="3">Senior</option>
        </Form.Control>
      </Form.Group>
  )
}

export default SelectField;