import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <div className="ui pointing menu">
          <Link to="/" className="active item">
            Stremer
          </Link>

          <div className="right menu ">
            <Link to="/streams" className="item">
              Streams
            </Link>
            <GoogleAuth />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Header;
