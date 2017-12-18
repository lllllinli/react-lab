import React from 'react';
import 'whatwg-fetch';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';




import './App.css';
import Navbar from './components/navbar/Navbar';
import Index from './pages/index/Index';
import Example_01 from './examples/example_01';
import Example_02 from './examples/example_02';


const APP = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Index}/>
        <Route path="/example_01" component={Example_01}/>
        <Route path="/example_02" component={Example_02}/>
      </div>
    </Router>
  );
};

export default APP;
