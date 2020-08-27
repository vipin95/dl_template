import React from "react";
import './public/css/index.css';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="bg bg-primary">
        <div className="p-2 pl-0 text-center text-sm-left pl-sm-4">
          <a href="/" className="pl-4 pr-4 text-white logoFont">DL Test</a>
        </div>
      </div>
    )
  }
}
export default Header;