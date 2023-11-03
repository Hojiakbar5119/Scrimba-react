import React from "react";
import logo from "./img/airbnb.png";
import "./components.css";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <img src={logo} alt="" />
        </nav>
      </div>
    );
  }
}

export default Navbar;
