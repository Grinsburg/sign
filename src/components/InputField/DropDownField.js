import React from 'react';

import {Form, InputGroup, Dropdown, FormControl, DropdownButton} from 'react-bootstrap';

const DropDownField = () => {
  return(
      <Form.Group>
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
  )
}

export default DropDownField;