import React from 'react'

function FunctionalClick() {

    function clickHandler (){
       console.log("button clicked on functional component")
    }

    return (
        <div>
            <button onClick={clickHandler}> Functional Click</button>
        </div>
    )
}

export default FunctionalClick
