import React from 'react'
import Person from './Person'

function PersonsList() {

    const persons = [
        {
            id:1,
            name:"Mark",
            age: 33
        },
        {
            id:2,
            name:"Dina",
            age: 20
        },
        {
            id:3,
            name:"Ali",
            age: 22  
        },
    ]

    const personsList =  persons.map((person) => <Person key={person.id} person={person}> </Person> )
    return (
        <div className="section">
        <h2>This is list rendering but bigger array </h2>
         {personsList}    
        </div>
    )
}

export default PersonsList
