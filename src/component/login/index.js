import React from 'react';
import { Link } from "react-router-dom";
import './public/css/index.css';

function Login(props){
  return(
    <div className="container-fluid  ">
      <div className="form_position position-relative" >
        <form action="#">
          <p className="h1 m-0">Login</p>
          <hr/>
          <div className="px-4 mx-4 mt-4">
            <div className="form-group ">
              <input type="email" required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
              <input type="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter password"/>
            </div>
            <div className="div_button_forgetPassword">
              <div class="float-left"><Link to="/forgot/password" className="px-0">Forget Password</Link></div>
              <div class="float-right"><button class="btn btn-primary px-4">Submit</button></div>
            </div>
            <div className="mt-4">
              <div class="text-center">
                <span>do not have an account?</span>
                <Link to="/signUp">Sign Up</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;