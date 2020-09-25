import React, {Component, useState} from  'react'

interface Props{
    users: User[]
}
interface State {
    users: User[]
}

export interface User {
    name: String
    date: String
    email: String
    age: number
}

export default class UserTable extends Component<Props, State>{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            users: props.users
        }
    }
    render(){
        return (
            <div className="container">
                <button className="add" onClick={this.addUser.bind(this)}> + </button>
                <table className="table" id="users">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                    {
                        this.state.users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.date}</td>
                                    <td>{user.age}</td>
                                    <td> <button onClick={this.deleteUser.bind(this, user)}> - </button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }

    addUser(){
        let newUser = {
            'name': "Someone",
            'email': "someemail@mail.com",
            'date': new Date().getFullYear() +"/"+(new Date().getMonth()+1)+"/"+ new Date().getDate(),
            'age': 25
        }
        this.setState((prevState) => ({users: prevState.users.concat(newUser)}))
    }

    deleteUser(user: User){
        this.setState((prevState) => ({users: prevState.users.filter((item) => item!=user)}))
    }
}

