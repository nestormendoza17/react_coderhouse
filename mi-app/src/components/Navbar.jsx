import React from "react";
import CartWidget from "./Cardwidget";

const Navbar = () => {
    return(
     <div className="container d-flex">
      <ul className="nav d-flex">
        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#"><img src="./logo_large.png" width="68"alt="logo" /></a>
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
        <div className="d-flex"><a class="navbar-brand justify-content-end" href=""><CartWidget /></a></div>   
    </div>
    )
}

export default Navbar;