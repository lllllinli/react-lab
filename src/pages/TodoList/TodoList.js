import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../../reducers/index'
import App from '../../components/App/App'

let store = createStore(todoApp);

const TodoList = () => (<Provider store={store}>
  <App />
</Provider>);

export default TodoList;
