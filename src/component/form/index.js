import React from "react";
import Fields , { Button , Footer } from "../Forgot_Password";

function Form(Props){
  return(
    <div>
      <p className="h1 m-0">{Props.name}</p>
      <hr/>
      <form>
        <Fields/>
        <Button/>
        {/* form fields and button */}
      </form>
      <div>
        {/* <Footer/> */}
        {/* form footer */}
      </div>
    </div>
  );
}
export default Form;