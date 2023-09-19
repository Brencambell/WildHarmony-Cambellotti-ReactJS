import { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";

const ItemCountContainer = ({ stock }) => {
    const [count, setCount] = useState (0);

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const reduce = () => {
        if (count !== 0) {
            setCount (count - 1);
        }
    };

    return <ItemCount count={count} increase={increase} reduce={reduce} /> 
}

export default ItemCountContainer;
//stock={stock}