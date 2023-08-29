//este componente contenedor va a recibir el listado de porductos de ItemList y le va a agregar la logica para mostar en el DOM
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services';
import ItemList from "../ItemList/ItemList"; //componente de presentacion 

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const { id } = useParams ();
    
    useEffect (() => {
        getProducts (id)
        .then ((response) => {
            setItems(response);
        });
    }, [id]);
    
    return <ItemList items={items} />;
};

export default ItemListContainer;

// const ItemListContainer = ({ greeting }) => {
//     return (
//         <div className= {`${styles.ItemListContainer} container-fluid`}>
//             <div className="d-flex justify-content-center align-items-center vh-100">
//                 <h1>{greeting}</h1>
//                 <ItemList items={[]} />;
//             </div>
//         </div>
//     )
// }