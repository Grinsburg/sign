import React, {Component} from 'react';

import { Form, Col } from 'react-bootstrap'
import InputField from '../InputField/InputField';
import SelectField from '../InputField/SelectField';
import DropDownField from '../InputField/DropDownField';
import RadioField from '../InputField/RadioField';
import SubmitField from '../InputField/SubmitField';

export default class Inputs extends Component{
    render(){
        return(
            <div className="col-12 pt-5 pl-0 pr-0">
                <Form>
                    <Form.Row>
                        <Col md="6" className="mb-2">
                            <InputField type="text" fieldName='Full Name'/>
                        </Col>
                        <Col md="6" className="mb-2">
                            <SelectField />
                        </Col>
                        <Col md="6" className="mb-2">
                            <InputField type="email" fieldName='Email'/>
                        </Col>
                        <Col md="6" className="mb-2">
                            <DropDownField />
                        </Col>
                        <Col md="6" className="mb-2">
                            <InputField type="text" fieldName='Country'/>
                        </Col>
                        <Col md="6" className="mb-2">
                            <InputField type="text" fieldName='City'/>
                        </Col>
                        <Col md="6" className="mb-2">
                            <InputField type="password" fieldName='Password'/>
                        </Col>
                        <Col md="6" className="mb-2">
                            <InputField type="password" fieldName='Confirm password'/>
                        </Col>
                        <RadioField label="Gender"/>
                        <SubmitField type="submit" value="Next Step"/>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}