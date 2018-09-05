import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Header from './partials/header'
import ProductPage from './ProductPage';
import ProductDetailPage from './ProductDetailPage';
import Home from './routes/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route path="/productList" component={ProductPage}/>
            <Route path="/productDetail/:productId" component={ProductDetailPage}/>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
