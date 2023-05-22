import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Catalog from './pages/catalog';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { createContext, useState } from 'react';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/catalog/:productId' element={<Product/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </CartContext.Provider>
  );
}

export default App;
