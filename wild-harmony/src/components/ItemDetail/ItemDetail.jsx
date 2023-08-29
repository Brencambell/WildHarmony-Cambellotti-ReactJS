import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h3>Loading...</h3>
  }
  
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