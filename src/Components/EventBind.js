import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "hello from event bind"
        }

        this.clickHandler = this.clickHandler.bind(this)

    }

    clickHandler(){
        // if you run this without bind method this will give you undefined why ? cause "this" value is undefined 
        this.setState({
            message: "goodbye"
        })
    }

    clickHandlerArrow = () => {
        this.setState({
            message: "goodbye"
        })
    }




    render() {
        return (
            <div>
                <p> {this.state.message}</p>
                <button onClick={this.clickHandler.bind(this)}> EventBind Click</button>
                <button onClick={() => this.clickHandler() }> EventBind Click using arrow function </button>
                <button onClick={this.clickHandler}> EventBind Click using binding in the constructor  </button>
                <button onClick={this.clickHandlerArrow}> EventBind Click using  class propery as arrow function </button>

            </div>
        )
    }
}

export default EventBind
