import React, { Component } from 'react'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sneha'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycleA ComponentDidMount')
    }

render() {
    return (
        <div>
            LifeCycleA Render
        </div>
    )
}
}

export default LifecycleA
