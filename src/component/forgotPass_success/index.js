import React from 'react';
import { Link } from 'react-router-dom';

function Success(props){
  return(
    <div>
      <div className="container bg-success pt-4 pb-4 mt-4">
        <p className="text-white">
          We have sent a reset password link to registred email address.
        </p>
      </div>
      <div className="container text-center mt-2">
        <Link className="btn btn-primary px-4 "to="/login">Login</Link>
      </div>
    </div>
  )
}
export default Success;