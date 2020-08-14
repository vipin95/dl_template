import React from "react";
import InputType from "../InputType";
import { Link } from "react-router-dom";
import './public/css/index.css';

const Fields  = (props) =>(
  <React.Fragment>
    <InputType  type="email" name="SignUp_email" id="SignUp_email" placeholder="Email" />
    <InputType  type="password" name="SignUp_password" id="SignUp_password" placeholder="Password" />
    <InputType  type="password" name="SignUp_confirm_password" id="SignUp_confirm_password" placeholder="Confirm Password" />
  </React.Fragment>
)

const Button  = (props) =>(
    <div className="text-center"><button className="btn btn-primary px-4">Register</button></div>
)
const Footer = () => (
  <React.Fragment>
    <div className="text-center">
      <span>already have an account?</span>
      <Link to="/admin">Login</Link>
    </div>
  </React.Fragment>
)

export default Fields;
export{
  Button,
  Footer
}