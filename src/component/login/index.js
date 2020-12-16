import React from 'react';
import { Link } from "react-router-dom";
import './public/css/index.css';

function pass_formate(){
  let pass ="Ina @123";
  let array = pass.split("");

  let small_char = false;
  let upper_char = false;
  let number = false;
  let symbol = false;
  let length = false;
  let unexpected_char = false;

  let temp = "";
  ( (array.length > 8) && (array.length < 16) ) ? (length = true) : (length = false);
  
  for(let i=0 ; i < array.length ; ++i){
    temp = array[i];

    switch(temp){
      case "@":
        symbol = true;
        break;
      case "#":
        symbol = true;
        break;
      case "*":
        symbol = true;
        break;
      case "$":
        symbol = true;
        break;
      default:
        if( Number.isInteger(parseInt(temp)) ){
          number = true;
          break;
        }
        else {
          if(( temp === temp.toUpperCase() )){
            upper_char = true;
            continue;
          }
          else{
            if(( temp === temp.toLowerCase() )){
              small_char = true;
              continue;
            }
            else unexpected_char = true;
          }
        }
    }
    if(number && upper_char && small_char && symbol && length){
      alert("password valid");
      break;
    }
    else{
      if(i == array.length-1 && unexpected_char && ( !number || !upper_char || !small_char || !symbol || !length ) ){
        alert("Password not valid");
      }
    }
  }
}
function Login(props){
  return(
    <div className="container-fluid  ">
      <div className="form_position position-relative" >
        <form action="#">
          <p className="h1 m-0">Login</p>
          <hr/>
          <p className="text-danger invalid_detail">invalid detail</p>
          <div className="px-4 mx-4 mt-4">
            <div className="form-group ">
              <input type="email" required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
              <input type="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter password"/>
            </div>
            <div className="div_button_forgetPassword">
              <div className="float-left"><Link to="/login/forgotPassword" className="px-0">Forget Password</Link></div>
              <div className="float-right"><button className="btn btn-primary px-4">Submit</button></div>
            </div>
            <div className="mt-4">
              <div className="text-center">
                <span>do not have an account?</span>
                <Link to="/signUp">Sign Up</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button className="btn btn-primary px-4" onClick={pass_formate}>Test</button>
    </div>
  )
}

export default Login;