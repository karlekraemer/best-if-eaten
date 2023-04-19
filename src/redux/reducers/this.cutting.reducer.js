const thisCuttingReducer = (state = {}, action) => {
    console.log('thisItemReducer action: ', action);  
        if (action.type === 'EDIT_QUANTITY_ONCHANGE'){
        console.log('EDIT ENTERED', action.payload);
        return {
          ...state,
          [action.payload.property]: action.payload.value
        }
      }
        return state;
    };

export default thisCuttingReducer;

// console.log('thisItemReducer action: ', action);  
// if(action.type === 'SET_THIS_CUTTING') {
//     return action.payload;
// } else 
 