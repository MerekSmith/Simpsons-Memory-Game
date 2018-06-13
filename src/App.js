import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Characters from "./components/Characters";

const App = () => (
  <div className="container">
    <Navbar />
    <Header />
    <Characters />
  </div>
);

export default App;
