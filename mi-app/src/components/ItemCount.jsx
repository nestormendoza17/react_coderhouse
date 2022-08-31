import React, {useState} from "react";
//contador de productos

const ItemCount =({initial,stock,onAdd}) => {
    const [count, setcount] = useState(initial);
    const decrementa = () =>{
        setcount(count - 1);
    }
    const incrementa = () => {
        setcount (count + 1);
    }
    return(
        <div className="counter">
            <button className="boton" disabled={count<=initial} onClick={decrementa}>-</button>
            <span>{count}</span>
            <button className="boton" disabled={count>=stock} onClick={incrementa}>+</button>
            <div>
                <button className="boton" disabled={count<=0} onClick={() => onAdd(count)}>Agregaste al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;