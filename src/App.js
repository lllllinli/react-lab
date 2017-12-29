import React from 'react';
import 'whatwg-fetch';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';




import './App.css';
import Navbar from './components/navbar/Navbar';
import Index from './pages/index/Index';
import ReactRouterBase from './pages/ReactRouter/ReactRouterBase';
import Example_01 from './pages/example_01/example_01';
import Example_02 from './pages/example_02/example_02';
import NoMatch from './pages/NoMatch/NoMatch';
import TodoList from './pages/TodoList/TodoList';
import ReduxTest from './pages/ReduxTest/ReduxTest';
import ReduxNormalizr from './pages/ReduxNormalizr/ReduxNormalizr';


const APP = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/react-router" component={ReactRouterBase}/>
          <Route path="/example_01" component={Example_01}/>
          <Route path="/example_02" component={Example_02}/>
          <Route path="/todoList" component={TodoList}/>
          <Route path="/reduxTest" component={ReduxTest}/>
          <Route path="/reduxNormalizr" component={ReduxNormalizr}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
};

export default APP;
