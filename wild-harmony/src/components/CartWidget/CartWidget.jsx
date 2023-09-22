import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            <button className="btn btn-outline-danger position-relative">
                <i className="bi bi-cart"></i>
                <span 
                    style={{ display: totalQuantity > 0 ? 'block' : 'none'}}
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                    <span className="visually-hidden">Productos en el carrito</span>
                    {totalQuantity}
                </span>
            </button>
        </Link>
    );
};

export default CartWidget;
