import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3> I am  {person.name} , I am {person.age} years old.</h3>
        </div>
    )
}

export default Person
