import React from 'react';
import { Link } from "react-router-dom";


class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {ConPassStatus: 0};
    this.matchPassword = this.matchPassword.bind(this);
  }
  matchPassword(){
  
    if (document.getElementById("password").value === document.getElementById("cPassword").value ) 
    {
      this.setState({ConPassStatus: 1});
    }
    else{
      this.setState({ConPassStatus: 2});
    }
  }
  render(){
    const ConPassStatus = this.state.ConPassStatus;
    let conformPass;
    if (ConPassStatus === 0) {
      conformPass = <input type="password" onChange={this.matchPassword} id="cPassword" required className="form-control mb-3" aria-describedby="emailHelp" placeholder='Confirm password'/>;
    } else {
      if(ConPassStatus === 2){
        conformPass = <input type="password" onChange={this.matchPassword} id="cPassword" required className="form-control mb-3 is-invalid" aria-describedby="emailHelp" placeholder='Confirm password'/>;
      }
      else{
        conformPass = <input type="password" onChange={this.matchPassword} id="cPassword" required className="form-control mb-3 is-valid" aria-describedby="emailHelp" placeholder='Confirm password'/>;
    }
  }
    return(
      <div className="container-fluid  ">
        <div className="form_position position-relative" >
          <form action="#">
            <p className="h1 m-0">Registration</p>
            <hr/>
            <div className="px-4 mx-4 mt-4">
              <div className="form-group ">
                <input type="email" required name="email" className="form-control mb-3" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                <input type="password" id="password" required className="form-control mb-3" aria-describedby="emailHelp" placeholder="Enter password"/>
                {conformPass}
              </div>
              <div className="div_button_forgetPassword">
              <div className="text-center"><button className="btn btn-primary px-4"> Registor </button></div>
              </div>
              <div className="mt-4">
                <div className="text-center">
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