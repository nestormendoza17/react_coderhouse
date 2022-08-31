import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    const onAdd = (cantidad) =>{
        console.log('Se agrego ${cantidad} undad/es al carrito')
        }
    
    return (//landing y contador
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemCount initial={0} stock={10} onAdd= {onAdd} />
        </div>
           )
    }

export default ItemListContainer;