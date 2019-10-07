import React, {Component} from 'react'

import Image from '../Image/Image'
import Form from '../Form/Form'

import {Col} from 'react-bootstrap'

export default class Sign extends Component{
    render(){
        return(
            <Col className="col-12">
                <div className="row shadow">
                    <Image />
                    <Form />
                </div>
            </Col>
        )
    }
}