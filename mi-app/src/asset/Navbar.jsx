import React from "react";
import logo from "./images/logo_large.png";

const Header = () => {
    return (
     <div className="container">
      <ul className="nav">
        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="68"alt="logo" /></a>
        </li>
        <li className="nav-item">
         <a className="nav-link link_header" href="#">Historia</a>
        </li>
        <li className="nav-item">
         <a className="nav-link link_header" href="#">Promos</a>
        </li>
        <li className="nav-item">
         <a className="nav-link link_header" href="#">Contacto</a>
        </li>
      </ul>   
    </div>
    )
}

export default Navbar;