import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "roqaya"
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "roqaya"
            })
        }, 6000);
    }




    render() {

        console.log("**********parent component*************");


        return (
            <div className="section">
                <h2>Parent Component</h2>
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
