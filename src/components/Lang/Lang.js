import React, {Component} from 'react'

export default class Lang extends Component{
    render(){
        return(
            <div class="col-2 d-flex align-items-center lang-item">
                <button class="btn btn-lang active" type="button">En</button>
                <button class="btn btn-lang" type="button">Ru</button>
            </div>
        )
    }
}