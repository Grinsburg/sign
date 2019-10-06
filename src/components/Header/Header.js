import React, {Component} from 'react'

import Lang from '../Lang/Lang'

export default class Header extends Component {
    render(){
        return(
            <div class="row justify-content-between pt-3">
                <div class="col-5">
                    <h1>Registration</h1>
                </div>
                <Lang />
            </div>
        )
    }
}