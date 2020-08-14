import React from "react";
import InputType from "../InputType";
import './public/css/index.css';

const Fields  = (props) =>(
  <React.Fragment>
    <p className="text-center text-dark h6 mb-3"><small>Please enter your register Email address.</small></p>
    <InputType  type="email" name="forgotPass_email" id="forgotPass_email" placeholder="Email" />
  </React.Fragment>
)

const Button  = (props) =>(
    <div className="text-center"><button className="btn btn-primary px-4">Submit</button></div>
)

export default Fields;
export{
  Button
}