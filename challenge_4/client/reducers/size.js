import Redux from 'redux';

const changeSizeReducer = (state = null, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.size;
    default:
      return state;
  }
};

export default changeSizeReducer;
