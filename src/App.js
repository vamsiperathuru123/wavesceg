import React from 'react';
import './App.css';
import Home from "./Home";
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Te from './Te';
import Nte from './Nte';

import Contacts from "./Contacts";
import Ps from './Ps';
import Electronics from './Electronics';
import Cs from './Cs';
import Electrical from './Electrical';
import Lt from './Lt';
import Khaleel from './Khaleel';
import Sa from "./Sa";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        
          

        
          <Route path="/Header">
            <Header/>
          </Route>
          <Route path="/Te">
            <Te/>
          </Route>
          <Route path="/Nte">
            <Nte/>
          </Route>
          <Route path="/Electrical">
            <Electrical/>
          </Route>
          <Route path="/Ps">
            <Ps/>
          </Route>
          <Route path="/Electronics">
            <Electronics/>
          </Route>
          <Route path="/Lt">
            <Lt/>
          </Route>
          <Route path="/Cs">
            <Cs/>
          </Route>
           <Route path="/Khaleel">
            <Khaleel/>
          </Route>
          <Route path="/Sa">
            <Sa/>
          </Route>
          <Route path="/Contacts">
            <Contacts/>
          </Route>
          
          <Route path="/Home">
            <Home/>

          </Route>
         
          <Route>
            <Home/>
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
