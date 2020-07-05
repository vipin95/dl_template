import React from "react";
import LinkR from "../link"
import './public/css/index.css';

function Header(props){
  return(
    <header className="bg_blue">
      <div className="ml-sm-5 pl-sm-5 define_position">
        <LinkR address="/">
          <h4 className="text-white">Online Test</h4>
        </LinkR>
      </div>
    </header>
  );
}
export default Header;