import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/user';
import ReduxTestApp from '../../components/ReduxTestApp/ReduxTestApp';

const store = createStore(reducers);

const ReduxTest = () => {
  return (
    <Provider store={store}>
      <ReduxTestApp />
    </Provider>
  );
};

export default ReduxTest;