import React from 'react'

function FunctionalClick() {

    function clickHandler (){
       console.log("button clicked on functional component")
    }

    return (
        <div className = "section">
        <h2>Click on functional component</h2>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionalClick
