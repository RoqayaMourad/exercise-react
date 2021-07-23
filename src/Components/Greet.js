import React from "react";

// function Greet (){
// return <h1>hello world</h1>;
// }

const Greet = (props) => {
    return (
        <div>
            <h1>hello {props.name} functional props</h1>
            {props.children}
        </div>
    )
}


export default Greet;