import { useState } from 'react';
import propTypes from "prop-types";


const ItemCount = ({ initial, onAdd, stock }) => {
    const [quantity, setQuantity] = useState (initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };
 
    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1);
        }
    };

    return (
        <>
            <div>
                <button className="btn btn-danger" onClick={decrement}> - </button>
                <span className="m-3">{quantity}</span>
                <button className="btn btn-danger" onClick={increment}> + </button>
            </div>
            <div>
                <button className="btn btn-outline-danger mt-2" onClick={() => onAdd(quantity)} disabled={!stock} > Add to cart 🛒 </button>
            </div>
        </>
    );

};

ItemCount.propTypes = {
    initial: propTypes.number,
    stock: propTypes.number,
    onAdd: propTypes.func,
  };

export default ItemCount;