import React, { Component } from "react";

// function Welcome (){

// return <h1>Welcome</h1>;
// }
class Welcome extends Component {
    render() {
        return (
            <div className="section">
                <h2>Welcome {this.props.name} , This is a class props</h2>
            </div>
        )
    }
}

export default Welcome;