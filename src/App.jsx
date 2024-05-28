import { React, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function handleInitialInvestment(e) {
    setInitialInvestment(e.target.value);
  }

  function handleAnnualInvestment(e) {
    setAnnualInvestment(e.target.value);
  }

  function handleExpectedReturn(e) {
    setExpectedReturn(e.target.value);
  }

  function handleDuration(e) {
    setDuration(e.target.value);
  }

  return (
    <>
      <Header idName="header" />

      <body>
        <section id="user-input">
          <UserInput
            label1="Initial Investment"
            label2="Annual Investment"
            fun1={handleInitialInvestment}
            fun2={handleAnnualInvestment}
          />
          <UserInput
            label1="Expected Return"
            label2="Duration"
            fun1={handleExpectedReturn}
            fun2={handleDuration}
          />
        </section>
        <section></section>
      </body>
    </>
  );
}

export default App;

//Year
//Investment Value
//Interest (Year)
//Total interest
//Invested capital
