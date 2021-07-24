import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("child")}> Greet parent from child Component</button>
        </div>
    )
}

export default ChildComponent
