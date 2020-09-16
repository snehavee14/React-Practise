import React from 'react'



const hello = () => {

    //With JSX

  //  return(
  //    <h1>Hello Sneha from Hello.js with JSX</h1>
  //  )

    //Without JSX

    return React.createElement('div',
    {id:'1',className:'someClass'},
    React.createElement('h1',
    null,'Hello Sneha from Hello.js without JSX'))
}


export default hello