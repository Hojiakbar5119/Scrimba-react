import React from "react";
import "./content.css";

class Hello extends React.Component {
  render() {
    return (
      <main>
        <h1>Main Component uchun </h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    );
  }
}

export default Hello;
