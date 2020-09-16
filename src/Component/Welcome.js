import React, { Component } from 'react'

class Welcome extends Component{
    render(){
    return <div><
        h1>Hi {this.props.name} as id { this.props.id}</h1>
        <h6>{this.props.children}</h6>
        </div>
        
    }
}

export default Welcome