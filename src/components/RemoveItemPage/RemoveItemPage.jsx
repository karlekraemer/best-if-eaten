// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import LogOutButton from '../LogOutButton/LogOutButton';

// function RemoveItem (){
//     const kitchen = useSelector((store) => store.kitchen);
//     const leftovers = useSelector((store) => store.leftovers);

//     //use history const
//     const history = useHistory();
//     //dispatch const
//     const dispatch = useDispatch();

//     function removeItem(item){
//         dispatch({
//             type: 'REMOVE_ITEM',
//             payload: item
//         });
//     }
//     return (
//         <p>This is the delete item page</p>
//         // {kitchen}
//     )
// }

// export default RemoveItem;