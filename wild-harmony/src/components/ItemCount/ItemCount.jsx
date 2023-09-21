import { useState } from 'react';

const ItemCount = ({ stock }) => {
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
    
    return (
        <>
            <div>
                <button className="btn btn-danger" onClick={reduce}> - </button>
                <span className="m-3">{count}</span>
                <button className="btn btn-danger" onClick={increase}> + </button>
            </div>
            <div>
                <button className="btn btn-outline-danger mt-2"> Add to cart 🛒 </button>
            </div>
        </>
    );
};

export default ItemCount;