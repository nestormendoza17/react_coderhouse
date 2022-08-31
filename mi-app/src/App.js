
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container-fluid fondo_main'>
      <Navbar />
      <hr />
      <ItemListContainer greeting="Vinos Diablo"/>
    </div>
  );
}

export default App;
