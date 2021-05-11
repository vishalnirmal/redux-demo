import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

import Navbar from './Components/Navbar';
import Backdrop from './Components/Backdrop';
import Sidebar from './Components/Sidebar';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <BrowserRouter>
        <Navbar click={()=>setSideToggle(true)}/>
        <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
        <Sidebar show={sideToggle} click={()=>setSideToggle(false)}/>
        <main className="app">
          <Switch>
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/product/:id" exact component={ProductScreen}/>
            <Route path="/cart" exact component={CartScreen}/>
          </Switch>
        </main>
    </BrowserRouter>
  );
}

export default App;
