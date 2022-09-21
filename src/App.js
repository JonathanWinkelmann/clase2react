import './App.css';
import NavBar from './components/NavBar';
import ItemslistContainer from './containers/ItemslistContainer';
import ItemDetailistContainer from './containers/ItemslistContainer/ItemDetailContainer';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {

  // const categorias = ["Electronics", "Audio & Video", "Clothing"]


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemslistContainer/>}/>
        <Route patch="/category/:categoryId" element={<ItemslistContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailistContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

