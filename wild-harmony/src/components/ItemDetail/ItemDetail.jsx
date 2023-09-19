import PropTypes from "prop-types";
import ItemCountContainer from "../ItemCountContainer/ItemCountContainer";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return (
      <div className="text-center">
        <h3 className="text-danger p-3">Loading...</h3>
        <div className="spinner-grow text-danger" role="status"></div>
      </div>
  )}
  
  if (!item) {
    return <h4>Error 404. El producto no existe</h4>;
  }

  return (
    <div className="row justify-content-center p-3">
      <div className="col-md-6">
        <div className="card mb-3">
          <img 
          src={`https://picsum.photos/400/300?random=${item.id}`} 
          className="card-img-top img-fluid" 
          alt={item.name} />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.category}</p>
            <p className="card-text">€{item.price}</p>
            <ItemCountContainer />
          </div>
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