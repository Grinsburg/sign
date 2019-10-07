import React, {Component} from 'react';

import { Form, Col, InputGroup, Dropdown, FormControl, DropdownButton, Button } from 'react-bootstrap'


export default class Inputs extends Component{
    render(){
        return(
            <div className="col-12 pt-5 pl-0 pr-0">
                <Form>
                    <Form.Row>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your name" />
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Position are you applying for</Form.Label>
                            <a href="/" tabindex="0" class="popover-link rounded-circle pl-1" id="example" role="button" data-toggle="popover" data-trigger="focus" title="Please applying your" data-content="Please select your position"><i class="fas fa-question-circle" ></i></a>
                            <Form.Control as="select">
                                    <option selected>Position are you applying for</option>
                                    <option value="1">Junior</option>
                                    <option value="2">Middle</option>
                                    <option value="3">Senior</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Phone number</Form.Label>
                            <InputGroup >
                                <DropdownButton
                                as={InputGroup.Prepend}
                                variant="secondary"
                                title="Flag"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item href="#">UK</Dropdown.Item>
                                <Dropdown.Item href="#">BY</Dropdown.Item>
                                <Dropdown.Item href="#">USA</Dropdown.Item>
                                <Dropdown.Item href="#">GE</Dropdown.Item>
                                </DropdownButton>
                                <FormControl aria-describedby="basic-addon1" placeholder="(999) 999-9999" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your country" />
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your city" />
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Please enter your password" />
                        </Form.Group>

                        <Form.Group as={Col} md={6}>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="text" placeholder="Please confirm password" />
                        </Form.Group>

                        <Form.Label>Gender</Form.Label>
                        <Form.Group as={Col} md={12}>
                            <Form.Row >
                                <Form.Group as={Col} md={2} id="formGridCheckbox">
                                    <Form.Check type="radio" label="Male" />
                                </Form.Group>
                                <Form.Group as={Col} md={2} id="formGridCheckbox">
                                    <Form.Check type="radio" label="Female" />
                                </Form.Group>
                                <Form.Group as={Col} md={2} id="formGridCheckbox">
                                    <Form.Check type="radio" label="Other" />
                                </Form.Group>
                                <Form.Group as={Col} md={4} id="formGridCheckbox">
                                    <Form.Check type="radio" label="Prefer not to say" />
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>
                        <Button as={Col} md={12} type="submit" className="btn btn-sign btn-block">Next Step <i class="fas fa-arrow-right"></i></Button>
                        <Form.Text as={Col} md={12} class="pt-3">
                            <p>Already have an account? <a href="/">  Sign in</a></p>
                        </Form.Text>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}