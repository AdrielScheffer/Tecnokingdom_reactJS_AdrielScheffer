
import './App.css';
import {Navbar} from './components/Navbar/Navbar.js';
import {CardWidget} from './components/CartWidget/CardWidget.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailsContainer/ItemDetailContainer';
import {Footer} from './components/Footer/Footer.js';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar>
        <CardWidget/>
      </Navbar>
      
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categorias/:categoryId' element={<ItemListContainer />}/>
          <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
          
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
