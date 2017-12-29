import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxNormalizrApp from '../../components/ReduxNormalizrApp/ReduxNormalizrApp';
import KillList from '../../reducers/killList';

const store = createStore(KillList);

const ReduxNormalizr = () => {
  return (
    <Provider store={store}>
      <ReduxNormalizrApp />
    </Provider>
  )
};

export default ReduxNormalizr;
