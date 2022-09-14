 import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
//navbar se incluye carrito y titulo de la tienda

const NavBar = () => {
    return(
     <div className="container d-flex">
        <div>Diablo Vinos</div>
      <ul className="nav d-flex">
        <li className="nav-item">
         <NavLink className="nav-link active" aria-current="page" to="/"><img src="./logo_large.png" width="68"alt="logo" /></NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link link_header" to="/categoria/dulces">Dulces</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link link_header" to="/categoria/fuertes">Fuertes</NavLink>
        </li>
       </ul>
        <div className="d-flex" alt="carrito"><NavLink class="navbar-brand justify-content-end" to="/cart"><CartWidget /></NavLink></div>   
    </div>
    )
}

export default NavBar;

