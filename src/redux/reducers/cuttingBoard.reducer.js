const cuttingBoardReducer = (state = [], action) => {
    console.log("in cuttingBoard reducer", action.payload);
    switch (action.type) {
      case 'SET_CUTTING_BOARD':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default cuttingBoardReducer;