import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div className="section">
        <h2> portals demo</h2>
           
        </div>
    ,
       document.getElementById("portal-root") 
    )
}

export default PortalDemo
