import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("button clicked on class component")
    }


    render() {
        return (
            <div className="section">
             <h2>Click on class component</h2>
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}

export default ClassClick
