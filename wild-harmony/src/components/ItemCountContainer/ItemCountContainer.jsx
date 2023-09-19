import { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";

const ItemCountContainer = () => {
    const [count, setCount] = useState (0);

    const increase = () => {
        //deberia de agregar una funcion que te permita agregar en base el stock que haya
        //incrementar max hasta nº de stock
        setCount (count + 1);
    };

    const reduce = () => {
        if (count !== 0) {
            setCount (count - 1);
        }
    };

    return <ItemCount count={count} increase={increase} reduce={reduce} /> 
}

export default ItemCountContainer;