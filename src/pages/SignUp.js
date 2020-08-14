import React from "react";
// import Fields , { Button , Footer } from "../component/SignUp";
import Header from "../component/header";
import Form from '../component/form';

function SignUp(props){
  return(
    <React.Fragment>
      <Header/>
      <Form name={props.name} />
    </React.Fragment>
  )
}
export default SignUp;