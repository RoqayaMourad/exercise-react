import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : "Parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        // this is written with template literals
        alert (`Hello ${this.state.parentName} From ${childName}`)
    }
    
    render() {
        return (
            <div className="section">
            <h2>Call child Component from Parent</h2>
               <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
