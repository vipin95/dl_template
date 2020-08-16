import React from 'react';
import { Link } from "react-router-dom";

function signUp(props){
  return(
    <div className="container-fluid  ">
      <div className="form_position position-relative" >
        <form action="#">
          <p className="h1 m-0">Registration</p>
          <hr/>
          <div className="px-4 mx-4 mt-4">
            <div className="form-group ">
              <input type="email" required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
              <input type="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter password"/>
              <input type="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder='Confirm password'/>
            </div>
            <div className="div_button_forgetPassword">
            <div class="text-center"><button class="btn btn-primary px-4"> Registor </button></div>
            </div>
            <div className="mt-4">
              <div class="text-center">
                <span>already have an account?</span>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signUp;