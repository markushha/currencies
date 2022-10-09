import React from "react";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="ui secondary menu">
        <a className="ui item">EasyConvert.com</a>
        <div className="right menu">
          <a className="item">Home</a>
          <a className="item active">Convert</a>
          <a className="item">FAQ</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
