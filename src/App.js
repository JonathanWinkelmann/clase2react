import './App.css';
import NavBar from './components/NavBar';
import ItemslistContainer from './containers/ItemslistContainer';
import Ad from './components/Ad';


function App() {

  const categorias = ["Electronics", "Audio & Video", "Clothing"]

  const temperatura = 18;

  return (
    <>
      <NavBar categories={categorias} 
      temp={temperatura} 
      />
      <ItemslistContainer greeting={"Hola bienvenido a nuestra app"} />
      <Ad>
        <h1>Titulo del Ad</h1>
        <span>un anuncio muy molesto</span>
      </Ad>
    </> 
  );
}

export default App;

