
import './App.css';
import {Navbar} from './components/Navbar/Navbar.js';
import {CardWidget} from './components/CartWidget/CardWidget.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailsContainer/ItemDetailContainer';
import {Footer} from './components/Footer/Footer.js';
import { CartPage } from './components/Cart/Cart';
import { CartContext } from './Context/CartContext';
import { useEffect, useState } from 'react';
import { Contact } from './components/Contact/Contact';
import { Checkout } from './components/Checkout/Checkout';
import { Login } from './components/Login/Login';
import {auth} from "./firebase/config";




function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged((usuarioFirebase)=>{
      console.log("ya tienes sesion iniciada con" + usuarioFirebase)
      setUser(usuarioFirebase)
    })
  },[])

  const logOut=()=>{
    auth.signOut();
  }


  const [Cart, setCart] = useState([])
  
  const addItem = (item)=>{

    setCart([...Cart, item])

  }

  const cantidadTotal= ()=>{

    return Cart.reduce( (acc, prod) => (acc += prod.cantidad), 0 )
  }

  const isInCart = (id) => {
    return Cart.some((prod) => prod.id === id)
  }

  const removeItem = (id) => {
    setCart( Cart.filter((prod) => prod.id !== id) )
}

  const emptyCart = () => {
    setCart( [] )
}

const totalPrice = () => {
  return Cart.reduce( (acc, prod) => acc += (prod.precio * prod.cantidad), 0)
}



  return (
    <CartContext.Provider value={ {Cart,addItem, cantidadTotal, isInCart, removeItem, totalPrice, emptyCart} }>
      <BrowserRouter>
        <div className="App">
          {user
          ? 
          <Navbar user={user} logOut={logOut}><CardWidget/></Navbar> 
          :
          <Navbar user={null} logOut={null}><CardWidget/></Navbar>}
          
          
            <Routes>
              <Route path='/login' element={<Login setUser={setUser}/>}/>
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

    </CartContext.Provider>
    
  );
}

export default App;
