import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import Nav from './nav/Nav'
import Home from './home/home'
import About from './about/about'
import './App.css';

function App() {
  return (<Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route> 
        <Route path="/about" component={About}></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
