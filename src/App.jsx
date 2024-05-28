import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <header id="header">
        <img src="investment-calculator-logo.png" alt="Broken Image"></img>
        <h1>React Investment Calculator</h1>
      </header>
      <body>
        <div id="user-input">
          <form className="input-group">
            <label>Block 1</label>
            <input type="text"></input>
            <label>Block 2</label>
            <input type="text"></input>
            <label>Block 3</label>
            <input type="text"></input>
            <label>Block 4</label>
            <input type="text"></input>
          </form>
        </div>
      </body>
    </>
  );
}

export default App;
