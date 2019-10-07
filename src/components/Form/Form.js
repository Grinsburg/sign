import React, {Component} from 'react'
import Header from '../Header/Header'
import Inputs from '../Inputs/Inputs'

export default class Form extends Component{
    render(){
        return(
            <div className="col-8">
                <div className="reg-block d-flex justify-content-center">
                    <div className="col-11 pt-4 pb-4">
                        <Header/>
                        <Inputs/>
                    </div>
                </div>
            </div>
        )
    }
}