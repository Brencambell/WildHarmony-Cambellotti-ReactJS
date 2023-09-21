import { Routes, Route } from "react-router-dom";//con estos componentes podremos crear nuestras rutas
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
//import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

      {/* <Checkout /> */}
      
    </CartProvider>
  )
}

export default App
