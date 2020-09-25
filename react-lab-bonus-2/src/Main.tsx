import React, {Component, useState} from 'react'
import './App.css';
import {render} from "react-dom";
import Registration from "./Registration";
import Auth from "./Auth";

interface Props {
}

interface State {
    registr: boolean
    login: boolean
}
export default class Main extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            registr: false,
            login: false
        }
    }
    render() {
        if (this.state.registr){
            return (
                <Registration />
            )
        }
        if (this.state.login){
            return (
                    Auth
            )
        }
        return (
            <div className="App">
                <p>Main</p>
                <button className="login-btn" onClick={this.registration.bind(this)}> Registration</button>
                <button className="registration" onClick={this.logIn.bind(this)}> Log in </button>
            </div>
        );
    }

    registration(){
        this.setState({registr: true, login: false})
    }
    logIn(){
        this.setState({registr: false, login: true})
    }
}
