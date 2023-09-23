import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services";
import { doc, getFirestore, updateDoc, serverTimestamp  } from "firebase/firestore";
import Field from "../Field/Field";
import { Link } from "react-router-dom";


const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const cartOrder = (cart) => {
    return cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
      title: item.title,
    }));
  };

  const updateStock = (cart) => {
    const db = getFirestore();
    cart.forEach((item) => {
      const stockDoc = doc(db, "items", item.id);
      updateDoc(stockDoc, { stock: item.stock - item.quantity });
    });
  };

  const { name, phone, email } = formState;
  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
      },
      items: cartOrder(cart),
      total,
      date: serverTimestamp(),
    };
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      updateStock(cart);
      clearCart();
    });
  };

  const isFormValid = name && phone && email;
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      {orderId && (
        <div className="p-5 text-center">
          <h4>Thank for trust on us {name}!</h4> 
          <h4>Your order ID is: {orderId} </h4>
          <Link to='/' className="btn btn-outline-danger mt-2">Go back to home</Link>
        </div>
      )}
      {!orderId && (
        <>
          <div className="card m-3">
          <h2 className="m-3">Checkout</h2>
              {cart.map((item) => (
                <div key={item.id}>
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text">Precio unitario: ${item.price}</p>
                    <p className="card-text">Subtotal: ${item.price * item.quantity}</p>
                  </div>  
                <hr />
              </div>
            ))}
            <h4 className="m-3">Total: ${total}</h4>
          </div>
        
          <br />

          <div className="container">
            <h4>Complete the form to finish</h4>
            <form className="form-control m-3 p-3" onSubmit={onSubmit}>
              <Field label="Name: " name="name" onChange={onChange} />
              <Field label="Phone: " name="phone" onChange={onChange} />
              <Field label="Email: " name="email" onChange={onChange} />
              <button
                className= "btn mt-4 btn-danger"
                disabled={!isFormValid}
                type="submit"
                onClick={handleCheckout}
              >
                Finish
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default Checkout;