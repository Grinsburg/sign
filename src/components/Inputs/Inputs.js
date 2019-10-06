import React, {Component} from 'react'

export default class Inputs extends Component{
    render(){
        return(
            <div className="col-12 pt-5">
                <form>
                    <div className="form-row">
                        <div class="form-group col-6">
                            <label for="inputEmail4">Full Name</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Please enter your name" />
                        </div>
                        <div class="form-group col-6">
                            <label for="inputGroupSelect01">Position are you applying for</label>
                            <a tabindex="0" class="popover-link rounded-circle" id="example" role="button" data-toggle="popover" data-trigger="focus" title="Please applying your" data-content="Please select your position"><i class="fas fa-question-circle" ></i></a>
                            <div class="input-group">
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Position are you applying for</option>
                                    <option value="1">Junior</option>
                                    <option value="2">Middle</option>
                                    <option value="3">Senior</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />>
                        </div>
                        <div class="form-group col-6">
                            <label for="dropdown">Phone number</label>
                            <div class="input-group" id="dropdown">
                                <div class="input-group-prepend">
                                    <button class="btn btn-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Flag</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">UK</a>
                                        <a class="dropdown-item" href="#">BY</a>
                                        <a class="dropdown-item" href="#">US</a>
                                        <a class="dropdown-item" href="#">GE</a>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="phone" aria-label="Text input with dropdown button" placeholder="(999) 999-9999" />
                            </div>
                        </div>
                        <div class="form-group col-6">
                            <label for="inputEmail4">Country</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Please enter your country" />
                        </div>
                        <div class="form-group col-6">
                            <label for="inputPassword4">City</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Please enter your city"/>
                        </div>
                        <div class="form-group col-6">
                            <label for="inputEmail4">Password</label>
                            <input type="password" class="form-control" id="inputEmail4" placeholder="Password" />
                        </div>
                        <div class="form-group col-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <label for="gender">Gender</label>
                    <div class="form-group col-12">
                        <div class="form-row justify-content-center">
                            <div class="col-12">
                                <div class="row" id="group1">
                                    <div class="form-check col-2">
                                        <input class="form-check-input" id="maleGender" type="radio" id="gridCheck1" name="group1" />
                                        <label class="form-check-label" for="maleGender"> Male</label>
                                    </div>
                                    <div class="form-check col-2">
                                        <input class="form-check-input" id="femaleGender" type="radio" id="gridCheck2" name="group1" />
                                        <label class="form-check-label" for="femaleGender">Female</label>
                                    </div>
                                    <div class="form-check col-2">
                                        <input class="form-check-input" id="oterGender" type="radio" id="gridCheck3" name="group1" />
                                        <label class="form-check-label" for="oterGender">Other</label>
                                    </div>
                                    <div class="form-check col-4">
                                        <input class="form-check-input" id="notSayGender" type="radio" id="gridCheck4" name="group1" />
                                        <label class="form-check-label" for="notSayGender">Prefer not to say</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-sign btn-block">Next Step <i class="fas fa-arrow-right"></i> </button>
                    <div class="pt-3">
                        <p>Already have an account? <a href="#">  Sign in</a></p>
                    </div>
                </form>
            </div>
        )
    }
}