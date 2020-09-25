import React, {Component, useState} from 'react'
import {User} from "./User";
import Auth from "./Auth";
import Main from "./Main";
interface Props {

}

interface State {
    registr: boolean
    user: User
    cancelled: boolean
}
export default class Registration extends Component<Props,State> {
    constructor(props: Readonly<Props>) {
        super(props);
        let user: User = {
            name: "Bekbolat",
            email: "bekbolatabylay@gmail.com",
            password: "pass"
        }
        this.state = {
            registr: false,
            user: user,
            cancelled: false
        }
    }
    render() {
        if (this.state.registr){
            return (
                <Auth user={this.state.user}/>
            )
        }else if (this.state.cancelled){
            return (
                <Main/>
            )
        }
        return (
            <div className="App">
                <p>Registration</p>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="submit" value="Register" onClick={this.registered.bind(this)}/>
                <input type="submit" value="Cancel" onClick={this.cancelled.bind(this)}/>
            </div>
        );
    }

    registered(){
        let user: User = {
            name: "Bekbolat",
            email: "bekbolatabylay@gmail.com",
            password: "pass"
        }
        this.setState({registr: true, user: user})
    }
    cancelled(){
        this.setState({cancelled:true})
    }

}
