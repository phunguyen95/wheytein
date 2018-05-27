import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer'
import Layout from './components/Layout/Layout';
import ProductPage from './components/ProductPage/ProductPage'

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Navbar/>
            <div className="layout">
            
            <Route exact path="/" component={Layout}/>            
            <Switch>
              <Route exact path="/products" component={ProductPage}/>
            </Switch>
            </div>
            
            <Footer/>

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
