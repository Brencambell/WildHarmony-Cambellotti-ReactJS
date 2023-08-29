import PropTypes from "prop-types";

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
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>€{item.price}</p>
    </div>
  )
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default ItemDetail