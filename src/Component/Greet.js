import React from 'react'

//function Greet(){
//  return <h1>Hello Sneha</h1>
//}

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} with id as {props.id}</h1>
            <h6>{props.children}</h6>
    </div>
    )
}

export default Greet
