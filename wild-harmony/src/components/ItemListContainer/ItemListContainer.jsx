//este componente contenedor va a recibir el listado de porductos de ItemList y le va a agregar la logica para mostar en el DOM
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services';
import ItemList from "../ItemList/ItemList"; //componente de presentacion 

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);
    const { categoryId } = useParams ();
    
    useEffect (() => {
        setIsLoading(true);

        getProducts (categoryId)
        .then ((response) => {
            setItems(response);
        })
        .catch (() => {
            setItems(null);
        })
        .finally (() => {
            setIsLoading (false);
        });
    }, [categoryId]);
    
    return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;