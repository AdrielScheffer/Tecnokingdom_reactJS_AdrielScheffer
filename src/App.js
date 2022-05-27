
import './App.css';
import {Navbar} from './components/Navbar/Navbar.js'
import {CardWidget} from './components/CartWidget/CardWidget.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js'

function App() {

  const props_rx6600 = {
    name: 'RX 6600 XT',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat ultricies justo.
    Nunc in leo ut sem egestas bibendum. Aenean venenatis varius ipsum, vitae ullamcorper neque
    rhoncus vestibulum. Donec efficitur porttitor ipsum auctor efficitur. Donec sed placerat lectus,
    vel scelerisque risus. Sed non dui urna. Nullam posuere ornare ipsum sed tempus. Quisque ac ultricie
    mi, sit amet auctor turpis. Phasellus dignissim nisi lorem, nec ultrices nunc luctus id. Nunc lacus
    urna, efficitur nec quam et, sodales semper erat. Suspendisse at egestas neque, a interdum metus.`,
  }

  const props_rtx3050 = {
    name: 'RTX 3050',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat ultricies justo.
    Nunc in leo ut sem egestas bibendum. Aenean venenatis varius ipsum, vitae ullamcorper neque
    rhoncus vestibulum. Donec efficitur porttitor ipsum auctor efficitur. Donec sed placerat lectus,
    vel scelerisque risus. Sed non dui urna. Nullam posuere ornare ipsum sed tempus. Quisque ac ultricie
    mi, sit amet auctor turpis. Phasellus dignissim nisi lorem, nec ultrices nunc luctus id. Nunc lacus
    urna, efficitur nec quam et, sodales semper erat. Suspendisse at egestas neque, a interdum metus.`,
    
  }


  return (
    <div className="App">
      <Navbar>
        <CardWidget/>
      </Navbar>
      <ItemCount stock={10}/>
      <h2>Productos</h2>
      <ItemListContainer props={props_rx6600}/>
      <ItemListContainer props={props_rtx3050}/>
      
      
      
      
      <p>
        Hardware store is coming!
      </p>
    </div>
    
  );
}

export default App;
