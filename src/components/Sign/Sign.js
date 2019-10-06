import React, {Component} from 'react'

import Image from '../Image/Image'
import Form from '../Form/Form'

export default class Sign extends Component{
    render(){
        return(
            <div className="col-12">
                <div className="row shadow">
                    <Image />
                    <Form />
                </div>
            </div>
        )
    }
}