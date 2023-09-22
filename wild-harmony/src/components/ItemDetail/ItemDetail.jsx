import PropTypes from "prop-types";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ isLoading, item }) => {
  
  if (isLoading) {
    return (
      <div className="text-center">
        <h3 className="text-danger p-3">Loading...</h3>
        <div className="spinner-grow text-danger" role="status"></div>
      </div>
  )};
  
  if (!item) {
    return <h4>Error 404. El producto no existe</h4>;
  };

  const [quantityAdded, setQuantityAdded] = useState(0);
//  const [newStock, setNewStock] = useState(item.stock);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
    // setNewStock(item.stock - quantity);
  };

  return (
    <div className="row justify-content-center p-3">
      <div className="col-md-6">
        <div className="card mb-3">
          <img 
          src={`../src/assets/img/${item.imageId}`}
          className="card-img-top img-fluid" 
          alt={item.title} />
          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.categoryId}</p>
            <p className="card-text">€{item.price}</p>
            <p className="card-text">Stock: {item.stock}</p>
          </div>

          
            {quantityAdded > 0 ? (
            <Link to="/cart" className="btn btn-danger m-2"> Go to Cart </Link>
            ) : (
            <div className="m-2">
              <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
            </div>
            )}

        </div>
      </div>
     </div>
  )
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default ItemDetail