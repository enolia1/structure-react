import React from "react";
import weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>weather App</h1>
        <weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/86838-enolia-ritabile-monareng"
            target="_blank"
          >
            Enolia Ritabile Monareng
          </a>{" "}
          and is{" "}
          <a href="https://github.com/enolia1/structure-react" target="_blank">
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
