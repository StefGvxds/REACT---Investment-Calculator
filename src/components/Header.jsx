import React from "react";

export default function Header({ idName }) {
  return (
    <header id={idName}>
      {/* Show Header Image */}
      <img src="investment-calculator-logo.png" alt="Broken Image"></img>
      {/* Header Text */}
      <h1>React Investment Calculator</h1>
    </header>
  );
}
