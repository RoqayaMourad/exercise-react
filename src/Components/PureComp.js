import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {

    render() {

        console.log("pure component");

        return (
            <div className="">
                <h2> PureComponent {this.props.name}</h2>
            </div>
        )
    }
}

export default PureComp
