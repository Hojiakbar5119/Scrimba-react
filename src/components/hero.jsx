import React from "react";
import photo from "./img/photos.png";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <img src={photo} alt="" />
        <section>
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </section>
      </div>
    );
  }
}

export default Hero;
