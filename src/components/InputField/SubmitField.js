import React from 'react';
import {Button, Col, Form} from 'react-bootstrap';

const SubmitField = ({type, value}) => {
  return(
      <Col md="12">
        <Button as={Col} md={12} type={type} className="btn btn-sign btn-block mb=3">{value} <i className="fas fa-arrow-right"></i></Button>
        <Form.Text as={Col} md={12} className ="pt-3">
          <p>Already have an account? <a href="/">  Sign in</a></p>
        </Form.Text>
      </Col>
  )
}

export default SubmitField;
