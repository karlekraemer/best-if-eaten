import React from 'react';
import { useDispatch } from 'react-redux';
import { Logout } from "@mui/icons-material";

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      <Logout fontSize="small" sx={{ color: '#000000'}}/>
    </button>
  );
}

export default LogOutButton;
