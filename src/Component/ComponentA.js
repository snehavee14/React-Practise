import React, { Component } from 'react'
import ComponentB from './Component/ComponentB'

class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB></ComponentB>
      </div>
    )
  }
}

export default ComponentA
