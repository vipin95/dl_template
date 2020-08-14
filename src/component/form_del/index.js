import React from "react";
import { Link } from "react-router-dom";

import './public/css/index.css';
import Div from '../Div/index';
import InputTypePassword from '../inputTypePassword/index';
import InputTypeEmail from '../inputType/index';
import Button from '../button/index';
import { formDetail } from '../../variables';

const ForgotPasswordToggel = (props)=>{
  if(props.formType === 0){
    return(
      <React.Fragment>
        <Div className="text-center"><Button className="btn btn-primary px-4" buttonName={formDetail[props.formType].button_label}/></Div>
      </React.Fragment>
    )
  }
  else{
    if(props.formType === 1){
      return(
        <React.Fragment>
          <div className="float-left"><Link to="/admin/login/forgotPassword" className="px-0">Forget Password</Link></div>
          <div className="float-right"><Button className="btn btn-primary px-4" buttonName={formDetail[props.formType].button_label}/></div>
        </React.Fragment>
      )
    }else{
      if(props.formType ===2){
        return(
          <React.Fragment>
            <Div className="text-center"><Button className="btn btn-primary px-4" buttonName={formDetail[props.formType].button_label}/></Div>
          </React.Fragment>
        )
      }
      else{
        return null;
      }
    }
  }
}
const FormInputType = (props)=>{
  if(props.formType === 0){
    return(
      <React.Fragment>
        <InputTypeEmail/>
        <InputTypePassword placeholder="password" name='password' />
        <InputTypePassword placeholder="confirm password" name='confirmPassword' />
      </React.Fragment>
    )
  }
  else{
    if(props.formType ===1){
      return(
        <React.Fragment>
        <InputTypeEmail/>
        <InputTypePassword placeholder="password" name='password' />
        </React.Fragment>
      )
    }
    else{
      if(props.formType ===2){
        return(
          <React.Fragment>
            <p className="text-center text-dark h6 mb-3"><small>Please enter your register Email address.</small></p>
            <InputTypeEmail/>
          </React.Fragment>
        )
      }
      else{
        alert("Please Enter correct form type in form Element : ./signup/index.js");
      }
    }
  }
}
const RedirectForLoginOrSignUp = (props)=>{
  if(props.formType === 0){
    return(
      <React.Fragment>
        <Div className="text-center">
          <span>already have an account?</span>
          <Link to="/admin">Login</Link>
        </Div>
      </React.Fragment>
    )
  }
  else{
    if(props.formType ===1){
      return(
        <React.Fragment>
          <span>do not have an account?</span>
          <Link to="/admin/signUp">Sign Up</Link>
        </React.Fragment>
      )
    }
    else{
      return null;
    }
  }
}

function Form(props){
  return(
    <div className="container-fluid  ">
      <div className="form_position position-relative" >
        <form action="#">
          <p className="h1 m-0">{formDetail[props.formType].name}</p>
          <hr/>
          <div className="px-4 mx-4 mt-4">
            <div className="form-group ">
              <FormInputType formType={props.formType}/>
            </div>
            <div className="div_button_forgetPassword">
              <ForgotPasswordToggel formType={props.formType}/>              
            </div>
            <div className="mt-4">
              <RedirectForLoginOrSignUp formType={props.formType}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form;