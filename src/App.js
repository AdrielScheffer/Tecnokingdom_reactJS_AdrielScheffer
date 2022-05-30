
import './App.css';
import {Navbar} from './components/Navbar/Navbar.js'
import {CardWidget} from './components/CartWidget/CardWidget.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js'

function App() {

  
  return (
    <div className="App">
      <Navbar>
        <CardWidget/>
      </Navbar>
      
        <ItemCount stock={10} />
        
        <ItemListContainer />
      
      
      
      
      
      
      
    </div>
    
  );
}

export default App;
