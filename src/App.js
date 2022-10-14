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
import ShopProvider from './context/ShopProvider';

function App() {

  // const categorias = ["Electronics", "Audio & Video", "Clothing"]


  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemslistContainer/>}/>
            <Route patch="/category/:categoryId" element={<ItemslistContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailistContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;

