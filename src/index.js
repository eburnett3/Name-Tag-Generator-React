import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Eric" />
    <NameTag name="Tori" />
    <NameTag name="Ghost" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
