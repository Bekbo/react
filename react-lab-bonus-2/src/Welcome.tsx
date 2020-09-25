import React, {Component, useState} from 'react'
import {User} from "./User";
interface Props {
    user: User
}

interface State {
    logged: boolean
}
export default class Welcome extends Component<Props, State>{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            logged : true
        }
    }
    render() {
        return (
            <>
                Welcome, {this.props.user.name}
            </>
        );
    }
}
