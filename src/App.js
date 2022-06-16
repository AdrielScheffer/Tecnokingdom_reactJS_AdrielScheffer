
import './App.css';
import {Navbar} from './components/Navbar/Navbar.js';
import {CardWidget} from './components/CartWidget/CardWidget.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailsContainer/ItemDetailContainer';
import {Footer} from './components/Footer/Footer.js';
import { Cart } from './components/Cart/Cart';
import { MiContext } from './Context/Context';

function App() {

  
  return (
    <MiContext.Provider>
      <BrowserRouter>
        <div className="App">
          <Navbar>
            <CardWidget/>
          </Navbar>
          
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/categorias/:categoryId' element={<ItemListContainer />}/>
              <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              
            </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
      
    </MiContext.Provider>
    
  );
}

export default App;
