import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <div className="logo-container">
                <p>ProtFunPrid</p>
            </div>
            <div className="meun-container">
                <a href="">Introductions</a>
                <a href="">Discussion</a>
                <a href="">Result</a>
                <a href="">About</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar