import React from "react";

const Item = ({info}) => {
   
    return(
        <div className="container col-md-4 mt-4">
        <div className="card">
          <img src={info.imagen} className="card-img-top" alt={info.titulo} />
          <div className="card-body">
            <h5 className="card-title">{info.titulo}</h5>
            <p className="card-text">${info.precio}</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    );
};

export default Item;