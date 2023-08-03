import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import { names } from "./data.js";
import "./styles.css";

const renderNameTag = (name) => <NameTag name={name.person} key={name.id} />;

const App = () => {
  const NameTagElements = names.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
