import React, {useState} from "react";
//contador 
const ItemCount =({initial,stock,onAdd}) => {
    const [count, setcount] = useState(initial);
    const decrementa = () =>{
        setcount(count - 1);
    }
    const incrementa = () => {
        setcount (count + 1);
    }
    return(
        <div clasName="card">
        <div className="card-body">
            <button className="boton" disabled={count<=initial} onClick={decrementa}>-</button>
            <span>{count}</span>
            <button className="boton" disabled={count>=stock} onClick={incrementa}>+</button>
            <div>
                <button className="boton" disabled={count<=0} onClick={() => onAdd(count)}>Agregaste al carrito</button>
            </div>
        </div>
        </div>
    );
}

export default ItemCount;