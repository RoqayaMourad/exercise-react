import React , {Component} from "react";

// with JSX
// const Hello = () => {
//     return (
//         <div className="header">
//         <h1>hello there Component</h1>
//         </div>
//     )
// }
// without JSX
const Hello = () => {
    return (
        React.createElement("div", {className:"section"},
        React.createElement('h2',null,"Hello , This is without JSX"))
    )
}



export default Hello ;