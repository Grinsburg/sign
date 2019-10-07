import React, {Component} from 'react'
import {Button, Col} from 'react-bootstrap'

export default class Lang extends Component{
    render(){
        return(
            <Col md={2} className="d-flex align-items-center lang-item">
                <Button className="btn btn-lang" type="button">En</Button>
                <Button className="btn btn-lang" type="button">Ru</Button>
            </Col>
        )
    }
}