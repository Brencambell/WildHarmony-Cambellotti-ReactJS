import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="container text-center mt-3">
        <h3>Your cart is empty 😥 </h3>
        <Link to="/" className="btn btn-outline-danger mt-2">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="container m-3">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3 className="d-flex justify-content-center">Total: ${total}</h3>
      <div className="d-flex justify-content-center">
        <button onClick={() => clearCart()} className="btn"> Vaciar Carrito </button>
        <Link to="/checkout" className="btn btn-danger"> Ir al Checkout </Link>
      </div>
    </div>
  );
};

export default Cart;