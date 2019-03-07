import React from "react";
import "../index.css";

const Navbar = props => (
  <div className="row bg-dark">
    <div className="col-md-4 nav-headers">
      <h3>Simpsons Memory Game</h3>
    </div>

    <div className="col-md-4 nav-headers">
      <h3>Click an image to begin!</h3>
    </div>

    <div className="col-md-4 nav-headers">
      <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
    </div>
  </div>
);

export default Navbar;
