 import ItemDetail from "./ItemDetail";
import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";


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

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items);
            }, 3000);
        });
        getData.then(res => setData(res.find(item => item.id) === parseInt (detalleId)));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;