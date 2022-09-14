import React from "react";
import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"; 

const items = [
     {id: 1, imagen:"../img/fabula.jpg", titulo:"Fabulas", category: "Dulce",precio:950,},
     {id: 2, imagen:"../img/gata_flores.jpg", titulo:"Gata Flora", category: "Fuerte",precio:890,},
     {id: 3, imagen:"../img/herencia_la_palabra.jpg", titulo: "Herencia la palabra", category:"Dulce",precio: 1200,},
     {id: 4, iamgen:"../img/herencia_trabajo.jpg", titulo: "Herencia Trabajo", category:"Dulce", precio: 1100,},
     {id: 5, imagen:"../img/la_mala_maria.jpg", titulo: "La Mala Maria", category:"Dulce", precio: 900,},
     {id: 6, imagen: "../img/la_maria_malbec", titulo: "La Maria Malbec", precio: 1300, },
     {id: 7, imagen: "../img/mi_amor_de_cuarentena.jpg", titulo: "Mi amor de cuarentena", category: "Fuerte",precio:1500,},
     {id: 8, imagen: "../img/sottano.jpg", titulo: "Sottano", category: "Fuerte",precio: 780,},
     {id: 9, imagen:"../img/tierra_prometida.jpg", titulo:"Tierra Prometida", category: "Fuerte", precio: 870,},
     {id: 10, imagen:"../img/vas.jpg", titulo: "VAS", precio: 2500,},
     {id: 11, imagen: "../img/vasiga_secreta.jpg", titulo:"Vasija Secreta", category:"Dulce", precio: 2000,},
];

const ItemListContainer = ({greeting}) =>{

 const [data,setData] = useState([]);

 const {categoriaId}= useParams();
 
 useEffect(()=> {
    const getData= new Promise(resolve => {
        setTimeout (()=> {
            resolve(items);
        },3000);
    }); 
    if(categoriaId){
        getData.then(res => res.filter(items=> items.category === categoriaId));
    }else{
     getData.then(res =>setData(res));
    }
 }, [categoriaId])


    const onAdd = (cantidad) => {
        console.log (`Se agregó ${cantidad} vinos al carrito`)
    
    };
    return (//landing y contador, ademas se agregaron productos
       <div>
       <ItemCount initial={0} stock={10} onAdd= {onAdd} />
       <ItemList data={data} />
       </div>
    );
};

export default ItemListContainer;