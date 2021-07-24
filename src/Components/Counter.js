import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {

        super(props)

        this.state = {
            count: 0

        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => { console.log("callback value", this.state.count) }
        // )
        this.setState((prevstate) => ( {
            count : prevstate.count +1
        } ))  
    }

    decrement() {
        this.setState((prevstate) => ( {
            count : prevstate.count -1
        } )) 
    }


    render() {
        return (
            <div className="section">
                <h1> Counter : {this.state.count} </h1>
                <div>
                    <button onClick={() => this.increment()}> Increment</button>
                <button onClick={() => this.decrement()}> decrement</button>
                </div>
                
            </div>
        )
    }
}

export default Counter


