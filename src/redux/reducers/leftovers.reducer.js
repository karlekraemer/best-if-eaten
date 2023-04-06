const leftoversReducer = (state = [], action) => {
    console.log("in leftovers reducer", action.payload);
    switch (action.type) {
      case 'SET_LEFTOVERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default leftoversReducer;