import propTypes from "prop-types";
import { Link } from 'react-router-dom'

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="text-center">
        <h3 className="text-danger p-3">Loading...</h3>
        <div className="spinner-grow text-danger" role="status"></div>
      </div>
  )}

  return (
    <div className= "row row-cols-1 row-cols-lg-4 m-3">

      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
            <div className="card">
              <img
                src={`../src/assets/img/${item.imageId}`}
                className="card-img-top img-fluid"
                alt={item.title}
              />
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">€{item.price}</p>
                <p className="card-text">{item.categoryId}</p>
                <button className="btn btn-outline-danger mt-2"> See more </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList