import React from "react";
import InputType from "../InputType";
import { Link } from "react-router-dom";
import './public/css/index.css';

const Fields  = (props) =>(
  <React.Fragment>
    <InputType  type="email" name="SignUp_email" id="SignUp_email" placeholder="Email" />
    <InputType  type="password" name="SignUp_password" id="SignUp_password" placeholder="Password" />
  </React.Fragment>
)

const Button  = (props) =>(
  <div className="overflow_hidden_c" >
    <div className="float-left"><Link to="/admin/login/forgotPassword" className="px-0">Forget Password</Link></div>
    <div className="float-right"><button className="btn btn-primary px-4">Login</button></div>
  </div>
)
const Footer = () => (
  <React.Fragment>
    <div className="text-center">
      <span>do not have an account?</span>
      <Link to="/admin">Sign Up</Link>
    </div>
  </React.Fragment>
)

export default Fields;
export{
  Button,
  Footer
}