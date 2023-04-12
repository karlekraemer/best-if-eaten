const spoiledReducer = (state = [], action) => {
    console.log("in spoiled reducer", action.payload);
    switch (action.type) {
      case 'SET_SPOILED':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default spoiledReducer;