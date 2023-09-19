const ItemCount = ({ count, increase, reduce }) => {
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