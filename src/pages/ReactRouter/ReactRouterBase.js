import React from 'react';
import {Route} from 'react-router-dom';

const Child = ({match}) => {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
};

const ReactRouterBase = ({match}) => {
  console.log(`${match.url}`)
  return (
    <div className="container">
      <div className="jumbotron mt-3">
        <h1>ReactRouter</h1>
      </div>
      <Route path={`/:id`} component={Child}/>
    </div>);
};

export default ReactRouterBase;
