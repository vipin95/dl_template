import React from 'react';
import { Link } from "react-router-dom";


class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.matchPassword = this.matchPassword.bind(this);
  }
  matchPassword(){
  
    if (document.getElementById("password").value === document.getElementById("cPassword").value ) 
    {
        alert("true");
    }
    else{
      alert("false");
    }
  }
  render(){
    return(
      <div className="container-fluid  ">
        <div className="form_position position-relative" >
          <form action="#">
            <p className="h1 m-0">Registration</p>
            <hr/>
            <div className="px-4 mx-4 mt-4">
              <div className="form-group ">
                <input type="text" onChange={this.matchPassword} required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                <input type="password" id="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter password"/>
                <input type="password" id="cPassword" required className="form-control mb-3" aria-describedby="emailHelp" placeholder='Confirm password'/>
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
}

export default SignUp;