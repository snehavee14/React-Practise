import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    Increment(){
        // this.setState(
        //     {
        //     count : this.state.count + 1
        //     }
        // )

        this.setState((previousCount) =>({
            count : previousCount.count + 1
        })
        )}

        
    IncrementFive(){
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();

    }
    
  render() {
    return (
        <div>
            <div>
                Count : {this.state.count}
            </div>
            <button onClick={()=>this.IncrementFive()}>IncrementBtn</button>
      </div>
    )
  }
}

export default Counter
