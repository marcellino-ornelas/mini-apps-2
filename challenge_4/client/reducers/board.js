import Redux from 'redux';

const changeBoardReducer = (state = null, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'CHANGE_BOARD':
      return action.board;
    default:
      return state;
  }
};

export default changeBoardReducer;
