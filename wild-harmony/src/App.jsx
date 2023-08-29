import { Routes, Route } from "react-router-dom" //con estos componentes podremos crear nuestras rutas
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Navegabilidad */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

      {/* ItemListContainer */}
      {/* <ItemListContainer /> */}

      {/* ItemDetailContainer */}
      {/* <ItemDetailContainer /> */}
      
    </div>
  )
}

export default App
