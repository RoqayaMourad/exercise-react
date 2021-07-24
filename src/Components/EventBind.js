import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello from Event binding"
        }

        this.clickHandler = this.clickHandler.bind(this)

    }

    clickHandler() {
        // if you run this without bind method this will give you undefined why ? cause "this" value is undefined 
        this.setState({
            message: "Goodbye!"
        })
    }

    clickHandlerArrow = () => {
        this.setState({
            message: "Goodbye! Again"
        })
    }




    render() {
        return (
            <div className="section">
                <h2> {this.state.message}</h2>
                <div className="btns-div">


                    <button onClick={this.clickHandler.bind(this)}> EventBind Click</button>
                    <button onClick={() => this.clickHandler()}> EventBind Click using arrow function </button>
                    <button onClick={this.clickHandler}> EventBind Click using binding in the constructor  </button>
                    <button onClick={this.clickHandlerArrow}> EventBind Click using  class propery as arrow function </button>
                </div>
            </div>
        )
    }
}

export default EventBind
