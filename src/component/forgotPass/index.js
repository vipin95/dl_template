import React from 'react';
import { Link } from "react-router-dom";
import './public/css/index.css';

function Login(props){
  return(
    <div className="container-fluid  ">
      <div className="form_position position-relative" >
        <form action="#">
          <p className="h1 m-0">Forgot password</p>
          <hr/>
          <div className="px-4 mx-4 mt-4">
            <div className="form-group ">
              <p className="text-center text-dark h6 mb-3"><small>Please enter your register Email address.</small></p>
              <input type="email" required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="div_button_forgetPassword">
              <div class="text-center"><button class="btn btn-primary px-4">Submit</button></div>
            </div>
            {/* <div className="mt-4">
              <div class="text-center">
                <span>do not have an account?</span>
                <Link to="/admin">Login</Link>
                <a href="jfdkfjdkf"> Sign Up</a>
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;