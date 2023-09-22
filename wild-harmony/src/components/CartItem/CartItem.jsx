import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = (item) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-center">
            <div className="card m-2" style={{ maxWidth: "540px" }} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`../src/assets/img/${item.imageId}`} alt={item.title} 
                        className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{item.title}</h4>
                            <p className="card-text">€{item.price}</p>
                            <p className="card-text">{item.quantity} unidad(es) </p>
                            <button className="btn btn-outline-danger mt-2" onClick={() => removeItem(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
