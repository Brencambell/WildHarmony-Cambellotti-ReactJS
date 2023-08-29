//en este contenedor de presentacion va a estar el listado de productos 
import propTypes from "prop-types";

const ItemList = ({ items }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 m-3">
      {/* <h1 className="col-12 mb-4">ItemList</h1> */}

      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={`https://picsum.photos/400/300?random=${item.id}`}
              className="card-img-top img-fluid"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">€{item.price}</p>
              <p className="card-text">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
};

export default ItemList