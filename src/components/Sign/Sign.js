import React, {Component} from 'react'

import Image from '../Image/Image'
import Form from '../Form/Form'

import {Col, Row} from 'react-bootstrap'

export default class Sign extends Component{
    render(){
        return(
            <Col className="col-12">
                <Row className="shadow">
                    <Image />
                    <Form />
                </Row>
            </Col>
        )
    }
}