 import React from "react";
import CartWidget from "./Cartwidget";
//navbar se incluye carrito y titulo de la tienda

const NavBar = () => {
    return(
     <div className="container d-flex">
        <div>Diablo Vinos</div>
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
        <div className="d-flex" alt="carrito"><a class="navbar-brand justify-content-end" href="#"><CartWidget /></a></div>   
    </div>
    )
}

export default NavBar;

