import React, { Component } from 'react'

class RefDemo extends Component {
constructor(props) {
  super(props)

  this.inputref=React.createRef()
}

componentDidMount(){
    this.inputref.current.focus()
}

ClickHandler=()=>{
    alert(this.inputref.current.value)
}

  render() {
    return (
      <div>
        <input type="text" ref={this.inputref}></input>
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo
