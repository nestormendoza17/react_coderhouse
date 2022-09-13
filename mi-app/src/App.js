
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="container-fluid fondo_main">
      <NavBar />
      <hr />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
