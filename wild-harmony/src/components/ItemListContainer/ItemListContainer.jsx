import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className= {`${styles.ItemListContainer} container-fluid`}>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <h1>{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer;