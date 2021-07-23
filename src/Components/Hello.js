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
        React.createElement("div", {className:"header"},
        React.createElement('h1',null,"hello there without JSX"))
    )
}



export default Hello ;