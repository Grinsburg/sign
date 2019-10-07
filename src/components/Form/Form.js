import React, {Component} from 'react'
import Header from '../Header/Header'
import Inputs from '../Inputs/Inputs'

import {Col} from 'react-bootstrap'

export default class Form extends Component{
    render(){
        return(
            <Col md="7">
                <div className="reg-block d-flex justify-content-center">
                    <Col md="12" className="pt-4 pb-4">
                        <Header/>
                        <Inputs/>
                    </Col>
                </div>
            </Col>
        )
    }
}