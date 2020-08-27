import React from 'react';
import { Link } from "react-router-dom";
import './public/css/index.css';

function Login(props){
  return(
    <div className="container-fluid  ">
      <div className="form_position position-relative" >
        <form>
          <p className="h1 m-0">Forgot password</p>
          <hr/>
          <div className="px-4 mx-4 mt-4">
            <div className="form-group ">
              <p className="text-center text-dark h6 mb-3"><small>Please enter your register Email address.</small></p>
              <input type="email" required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="div_button_forgetPassword">
              {/* <div className="text-center"><button  className="btn btn-primary px-4">Submit</button></div> */}
              <div className="text-center"><Link to="/login/forgotPassword/success" className="btn btn-primary px-4">Submit</Link></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;