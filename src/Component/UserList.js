import React, { Component } from 'react'
import axios from "axios"

export class UserList extends Component {
    constructor(props){
    super(props)
    this.state={
        user:[]
    }}
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            this.setState({user:response.data})
        })
        .catch(error=>{
            console.log(error)
        })

    }
    render() {
        const {user}=this.state
        return (
            <div >
                <h2 className="title">LIST OF USER</h2>
                {
                    user.length ?
                    user.map(post=><div key={post.id}>{post.name} {post.username}{post. email}</div>):null
                }
            </div>
        )
    }
}

export default UserList
