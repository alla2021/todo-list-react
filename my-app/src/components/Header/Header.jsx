import React from "react";
import "./header.scss";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">To Do List</div>
        {children}
      </div>
    </header>
  );
};

export default Header;
