import React from 'react';

function Input_Type(props){
  return <input type={props.type} required name={props.name} className="form-control mb-3" id={props.id} placeholder={props.placeholder}/>
}
export default Input_Type;