import React from 'react';

function Div(props){
  return <div className={props.class} >{ props.children }</div>
}
export default Div;