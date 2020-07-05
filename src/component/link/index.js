import React from "react";
import { Link } from "react-router-dom";

function LinkRef(props){
  return(
    <Link to={props.address} >{props.children}</Link>
  );
}
export default LinkRef;