import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // first approch using if 
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div className="section">
        //             <h1>  Welcome User </h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div className="section">
        //             <h1>Welcome Guest</h1>
        //         </div>
        //     )
        // }


        // second approch using variable declaration 
        // let message ; 
        // if (this.state.isLoggedIn) {
        //     message = <h1>Welcome User</h1>
        // } else {
        //     message = <h1>Welcome Guest</h1>
        // }

        // return (<div className="section">
        //     {message}
        // </div>)



        // third approch using ternary conditional (used most of the time )
        return (
            this.state.isLoggedIn ?
                (<div className="section">
                    <h2>This is Conditional Rendering</h2>
                    <h1> Welcome User</h1>
                </div>) :
                (<div className="section">
                    <h2>This is Conditional Rendering</h2>
                    <h1>Welcome Guest</h1>
                </div>)
        )


        // fourth approch (specific case of the third approch)(the short circuit operator)
        // if the user loggedin render welcome otherwise render nothing 
        // return (
        //     this.state.isLoggedIn && <div className="section"><h1>  Welcome User </h1></div>
        // )

    }
}

export default UserGreeting
