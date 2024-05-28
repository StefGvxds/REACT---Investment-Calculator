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
        <form id="user-input">
          <div className="input-group">
            {" "}
            <label>Block 1</label>
            <br />
            <input type="text"></input>
            <label>Block 2</label>
            <br />
            <input type="text"></input>
          </div>

          <div className="input-group">
            {" "}
            <label>Block 1</label>
            <br />
            <input type="text"></input>
            <label>Block 2</label>
            <br />
            <input type="text"></input>
          </div>
        </form>
      </body>
    </>
  );
}

export default App;
