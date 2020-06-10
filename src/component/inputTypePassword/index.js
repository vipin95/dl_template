import React from 'react';

function inputTypePassword(props){
  return <input type="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder={props.placeholder} name={props.name}/>
}
export default inputTypePassword;