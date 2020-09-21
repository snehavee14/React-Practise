import React, { Component } from 'react'

class Message extends Component{

constructor(){
    super()
    this.state={
        message:'Welcome Visitor'
    }
}

chnageMessage(){
    this.setState({
        message:'Thanks for Subscribing'
    })
}


    render(){
    return (<div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.chnageMessage()}>Click me to subscribe</button>
        </div>
    )
    }
}


export default Message