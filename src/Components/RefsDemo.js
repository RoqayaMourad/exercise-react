import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
        //first approach using create ref
         this.inputRef = React.createRef()

        //  second approach using callback refs
         this.cbRef = null; 
         this.setCbRef = (element) => {
             this.cbRef = element
         }
     }
     
     componentDidMount(){
        // first approach
        //  this.inputRef.current.focus()
        //  console.log(this.inputRef)

        // second approach
        if (this.cbRef) {
            this.cbRef.focus();
        }

     }

     
     clickHandler =()=>{
         alert(this.inputRef.current.value)
     }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
