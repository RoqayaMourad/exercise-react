import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name : "Roqaya"
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")  
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null 
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState ({
            name : "State Updated"
        })
    }

    
    render() {
        console.log("LifeCycleA render")
        return (
            <div className="section">
                <h2>LifeCycle A </h2>
                <button onClick={this.changeState}> Chnage State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
