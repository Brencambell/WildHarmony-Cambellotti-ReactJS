import Navbar from "./components/Navbar/Navbar"
import ItemListContain from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* ItemListContain */}
      <ItemListContain greeting={ "Hola Mundo!" } />
    </div>
  )
}

export default App
