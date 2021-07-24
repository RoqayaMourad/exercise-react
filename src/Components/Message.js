import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        // state is varaible 
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    changeMessage(){
        // setstate is function 
        this.setState({
            message : "Thank you for Subscribing <3"
        }
        )
    }

    render() {
        return (
            <div className="section">
                <h1> {this.state.message}  </h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;