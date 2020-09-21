import React, { Component } from 'react'




class EventBind extends Component{

    constructor(Props){
        super(Props)
        this.state={
            message : "button Clicked"
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState(
            {
                message:'GoodBye'
            }
        )
    }

render(){
    return(
        <div>
            <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button> 
                <button onClick={()=>this.clickHandler()}>Click</button> 
            
        </div>
    ) 
}
}

export default EventBind