import React, {Component} from 'react'
import Header from '../Header/Header'
import Inputs from '../Inputs/Inputs'

export default class Form extends Component{
    render(){
        return(
            <div class="col-8">
                <div class="reg-block d-flex justify-content-center">
                    <div class="col-10 pt-4 pb-4">
                        <Header/>
                        <Inputs/>
                    </div>
                </div>
            </div>
        )
    }
}