import react,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList  from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from "./components/Modal"
//import M from 'minimatch';


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>

          <Route path="/cart" component={Cart}></Route>

          <Route component={Default}/>

        </Switch>
        <Modal/>

      </React.Fragment>
      
      

    );

  }
  
}

export default App;
  