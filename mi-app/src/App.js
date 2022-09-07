
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="container-fluid fondo_main">
      <NavBar />
      <hr />
      <ItemListContainer greeting="Vinos Diablo"/>
    </div>
  );
}

export default App;
