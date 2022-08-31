import React from "react";
import cart from "../img/cart.png";
//carrito para el navbar
const CartWidget = () => {
    return(
        <div>
        <img src={cart} width="30"  alt="" />
        </div>
    )
}
export default CartWidget;