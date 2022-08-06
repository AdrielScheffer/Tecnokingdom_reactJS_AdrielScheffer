
import './App.css';
import {Navbar} from './components/navbar/Navbar.js';
import {CardWidget} from './components/CartWidget/CardWidget.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailsContainer/ItemDetailContainer';
import {Footer} from './components/Footer/Footer.js';
import { CartPage } from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { Contact } from './components/Contact/Contact';
import { Checkout } from './components/Checkout/Checkout';
import { Login } from './components/Login/Login';
import { OrdersContainer } from './components/OrdersContainer/OrdersContainer';
import {AuthProvider} from './Context/AuthContext';




function App() {

  


  return (
    
    <CartProvider>
      <AuthProvider>
      <BrowserRouter>
        <div className="App">
          
          <Navbar><CardWidget/></Navbar>
          
            <Routes>
              <Route path='/compras' element={<OrdersContainer/>}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/categorias/:categoryId' element={<ItemListContainer />}/>
              <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/contacto' element={<Contact/>}/>
              
            </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
      </AuthProvider>
      </CartProvider>
      
    
  );
}

export default App;
