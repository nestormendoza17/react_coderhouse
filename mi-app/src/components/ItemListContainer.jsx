import React from "react";
import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const items = [
     {id: 1, imagen:"../img/fabula.jpg", titulo:"Fabulas", precio:950,},
     {id: 2, imagen:"../img/gata_flores.jpg", titulo:"Gata Flora", precio:890,},
     {id: 3, imagen:"../img/herencia_la_palabra.jpg", titulo: "Herencia la palabra", precio: 1200,},
     {id: 4, iamgen:"../img/herencia_trabajo.jpg", titulo: "Herencia Trabajo", precio: 1100,},
     {id: 5, imagen:"../img/la_mala_maria.jpg", titulo: "La Mala Maria", precio: 900,},
     {id: 6, imagen: "../img/la_maria_malbec", titulo: "La Maria Malbec", precio: 1300, },
     {id: 7, imagen: "../img/mi_amor_de_cuarentena.jpg", titulo: "Mi amor de cuarentena", precio:1500,},
     {id: 8, imagen: "../img/sottano.jpg", titulo: "Sottano", precio: 780,},
     {id: 9, imagen:"../img/tierra_prometida.jpg", titulo:"Tierra Prometida", precio: 870,},
     {id: 10, imagen:"../img/vas.jpg", titulo: "VAS", precio: 2500,},
     {id: 11, imagen: "../img/vasiga_secreta.jpg", titulo:"Vasija Secreta", precio: 2000,},
];

const ItemListContainer = ({greeting}) =>{
    const [data, setData] = useState([]);

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(items);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (cantidad) => {
        console.log (`Se agregó ${cantidad} vinos al carrito`)
    
    };
    return (//landing y contador, ademas se agregaron productos
       <div className="container">
         <div className="row">
            <h1 className="greting">{greeting}</h1>
         </div>
        
        <div className="container"> 
            <div className="row">
              <ItemList  data={data} />
              <div className="row">
            </div>
            <div className="col-md-4">
            <ItemCount initial={0} stock={10} onAdd= {onAdd} />
           </div>  
          </div>
        </div>
       </div>
    );
};

export default ItemListContainer;