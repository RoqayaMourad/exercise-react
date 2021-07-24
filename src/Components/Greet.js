import React from "react";

// function Greet (){
// return <h1>hello world</h1>;
// }

const Greet = (props) => {
    return (
        <div className="section">
            <h2>Hello {props.name} , This is a functional props</h2>
            {props.children}
        </div>
    )
}


export default Greet;