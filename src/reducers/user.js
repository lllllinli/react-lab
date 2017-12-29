import { combineReducers } from 'redux';

function lover(state = 0, action) {
  switch (action.type) {
    case 'LOVE_COUNT':
      state = action.count;
      return state;
    default:
      return state
  }
}


const User = combineReducers({
  lover,
});

export default User;
