import React, {Component, useState} from 'react'
import {User} from "./User";
import Welcome from "./Welcome";
import Main from "./Main";
interface Props {
    user:User
}

interface State {
    user:User
    logged: boolean
    cancelled: boolean
}
export default class Auth extends Component<Props, State>{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            user: props.user,
            logged: false,
            cancelled: false
        }
    }
    render() {
        if (this.state.logged){
            return (
                <Welcome user={this.state.user}/>
            )
        }else if (this.state.cancelled){
            return (
                <Main/>
            )
        }
        return (
            <div className="App">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="submit" value="Log In" onClick={this.checkUser.bind(this)}/>
                <input type="submit" value="Cancel" onClick={this.cancelled.bind(this)}/>
            </div>
        );
    }
    checkUser(){
        let email = "bekbolatabylay@gmail.com"
        let password = "pass"
        if (email == this.state.user.email && password == this.state.user.password){
            this.setState({user: this.state.user, logged: true})
        }
    }
    cancelled(){
        this.setState({cancelled:true})
    }
}
