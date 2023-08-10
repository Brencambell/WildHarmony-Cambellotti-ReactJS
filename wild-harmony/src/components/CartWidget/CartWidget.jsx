const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-danger position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                     <span className="visually-hidden">Productos en el carrito</span>
                 </span>
            </button>
        </div>
    );
}

export default CartWidget;