import React from "react";
import {Link} from "react-router-dom";

const Item = ({info}) => {
   
    return(
        <Link to={"/detalle/${info.id}"} className="items">
          <img src={info.imagen} alt="" />
          <p>{info.titulo}</p>
        </Link>
    );
};

export default Item;