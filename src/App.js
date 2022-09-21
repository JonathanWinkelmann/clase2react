import './App.css';
import NavBar from './components/NavBar';
import ItemslistContainer from './containers/ItemslistContainer';
import ItemDetailistContainer from './containers/ItemslistContainer/ItemDetailContainer';



function App() {

  // const categorias = ["Electronics", "Audio & Video", "Clothing"]


  return (
    <>
      <NavBar />
      <ItemslistContainer greeting={"Hola bienvenido a nuestra app"} />
      <ItemDetailistContainer/>
    </> 
  );
}

export default App;

