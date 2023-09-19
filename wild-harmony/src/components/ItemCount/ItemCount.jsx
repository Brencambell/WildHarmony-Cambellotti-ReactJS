const ItemCount = ({ count, increase, reduce }) => {
    return (
        <div>
            <button className="btn btn-danger" onClick={reduce}> - </button>
            <span className="m-3">{count}</span>
            <button className="btn btn-danger" onClick={increase}> + </button>
        </div>
    );
};

export default ItemCount;