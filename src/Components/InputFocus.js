import React, { Component } from 'react'
import Input from './Input'

export class InputFocus extends Component {
    constructor(props){
        super(props)

        this.componentRef = React.createRef();
    }
    
    clickHandler = ()=> {
        this.componentRef.current.focusInput()
    }
   
    render() {
        return (
        <div className="section">
            <Input ref={this.componentRef} />
            <button onClick={this.clickHandler}>Focus input</button>
        </div>
    )
    }
}

export default InputFocus
