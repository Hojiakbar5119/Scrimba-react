import React from "react";
import logo from "./img/Vite.png";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <img src={logo} alt="" />
          <h3>ReactFancts</h3>
        </div>
        <h4>React Course - Project 1</h4>
      </nav>
    );
  }
}

export default Navbar;
