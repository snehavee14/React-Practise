import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [{ name: 'abc', id: 1, age: 12 }, { name: 'def', id: 2, age: 13 }, { name: 'ghi', id: 3, age: 14 }]
    // const PersonList = persons.map(person => person.name + person.id + person.age)
    //const PersonList = persons.map(person => <Person> person={person}</Person>)

    const names = ['Sneha', 'Yashwanth', 'Sneha']
const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)
    return <div>{nameList}</div>

}

export default NameList
