import Redux from 'redux';

const changeMinesReducer = (state = null, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'CHANGE_MINES':
      return action.mines;
    default:
      return state;
  }
};

export default changeMinesReducer;
