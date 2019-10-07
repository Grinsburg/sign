import React, {Component} from 'react'

import Lang from '../Lang/Lang'
import Title from '../Title/Title'

import {Row} from 'react-bootstrap'

export default class Header extends Component {
    render(){
        return(
            <Row className="justify-content-between pt-3">
                <Title />
                <Lang />
            </Row>
        )
    }
}