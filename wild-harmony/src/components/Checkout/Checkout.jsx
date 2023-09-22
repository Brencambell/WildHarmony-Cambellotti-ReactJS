import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services";
import { doc, getFirestore, updateDoc, serverTimestamp  } from "firebase/firestore";
import Field from "../Field/Field";


const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (isLoading) {
    return (
      <div className="loader">
        <PacmanLoader color="#ffc107" size={50} />
      </div>
    );
  }

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
    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
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
        <div className="container p-5">
          <p>
            Thank for trust on us {name}!. Your order ID is:
            <br />
            <span>{orderId}</span>
          </p>
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
            <h4 className="m-3">Total de la compra: ${total}</h4>
          </div>
        
          <br />

          <div>
            <h4>Complete the form to finish</h4>
            <form className="form-control" onSubmit={onSubmit}>
              <Field label="Nombre " name="name" onChange={onChange} />
              <Field label="Telefono " name="phone" onChange={onChange} />
              <Field label="Email " name="email" onChange={onChange} />
              <button
                className= "btn mt-4 btn-danger"
                disabled={!isFormValid}
                type="submit"
                onClick={handleCheckout}
              >
                Finalizar compra
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default Checkout;