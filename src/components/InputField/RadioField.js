import React from 'react';
import {Form, Col, Row} from 'react-bootstrap';

const RadioField = ({label}) => {
  return(
      <Col md="12" className="mb-2">
        <Form.Group as={Col} md={12} className="pl-0">
        <Form.Label>{label}</Form.Label>
        <Form.Group as={Row} >
          <Col md={2}>
              <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              />
          </Col>
          <Col md={2}>
              <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              />
          </Col>
          <Col md={2}>
              <Form.Check
              type="radio"
              label="Other"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              />
          </Col>
          <Col md={4}>
              <Form.Check
              type="radio"
              label="Prefer not to say"
              name="formHorizontalRadios"
              id="formHorizontalRadios4   "
              />
          </Col>
          </Form.Group>
        </Form.Group>
      </Col>
  )
}

export default RadioField;