import React from "react";
import { Link } from "react-router-dom";
import logo from  "./shipment.png"


function Navbar() {
    return (
    <>
    <nav className="navbar navbar-expand-lg">
    <brand><img src={logo} style={{height:"40px"}}></img>Road Transport Dept</brand>  
    <button style={{backgroundColor:"white"}} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTog"
                aria-controls="navbarTog">
                <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbarTog">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/Newreg' className="nav-link " >New Registration</Link>
        </li>
        <li className="nav-item">
          <Link to='/Newlic' className="nav-link " >Apply License</Link>
        </li>
        <li className="nav-item">
          <Link to='/Newper' className="nav-link " >Apply Permit</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Logout</a>
        </li>
      </ul>
      
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  </nav>
    </>
);
}
export default Navbar