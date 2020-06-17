import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';

class App extends Component {
     
  render() {
  return (
    <Router>
    
      <Switch>
      { this.showContentMenu(routes) }
      </Switch>
       
    </Router>
  )
  }

   showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                    key={index} 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.main} 
                    />
                    );
            });
        }
        return result;
    }
}

export default App;
