import { combineReducers } from 'redux';

const killer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return
    default:
      return state
  }
}

const people = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return
    default:
      return state
  }
}

const KillList = combineReducers({
  killer,
  people,
});

export default KillList;


