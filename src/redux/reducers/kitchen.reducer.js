const kitchenReducer = (state = [], action) => {
    console.log("in kitchen reducer", action.payload);
    switch (action.type) {
      case 'SET_KITCHEN':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default kitchenReducer;