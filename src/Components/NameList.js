import React from 'react'

function NameList() {
    const names = ["Bruce " , "Mark" , "Dina"]
    const nameList =  names.map((name, index ) => <span key={index}>   {index}-{name} ...</span>)
    return (
        <div className="section">
        <h2>This is list rendering </h2>
         {nameList}    
        </div>
    )
}

export default NameList
