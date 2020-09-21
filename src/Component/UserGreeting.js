import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Sneha</div>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Sneha</div>
        // }
        // else {
        //     message = <div>Hello Guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )

        // return (
        //     this.state.isLoggedIn ? <div>Hello Sneha</div> : <div>Hello Guest</div>
        // )

        return this.state.isLoggedIn&&<div>Welcome Sneha</div>

    }

}


export default UserGreeting
