import { React, useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import calculateInvestmentResults from "./util/investment.js";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleUserInput(name, newValue) {
    setUserInput((oldState) => ({
      ...oldState,
      [name]: +newValue,
    }));
  }

  const [tableOutput, setTableoutput] = useState([]);

  useEffect(() => {
    if (
      userInput.initialInvestment &&
      userInput.annualInvestment &&
      userInput.expectedReturn &&
      userInput.duration
    ) {
      const results = calculateInvestmentResults({
        initialInvestment: userInput.initialInvestment,
        annualInvestment: userInput.annualInvestment,
        expectedReturn: userInput.expectedReturn,
        duration: userInput.duration,
      });

      setTableoutput((prevAr) => results);
      console.log("APP-Results", results);
      console.log("APP-UserInput:", userInput);
      console.log("APP-initialInvestment:", userInput.initialInvestment);
      console.log("APP-annualInvestment:", userInput.annualInvestment);
      console.log("APP-expectedReturn:", userInput.expectedReturn);
      console.log("APP-duration:", userInput.duration);
    }
  }, [userInput]);

  return (
    <>
      <Header idName="header" />

      <section id="user-input">
        <UserInput
          label1="initialInvestment"
          label2="annualInvestment"
          fun1={handleUserInput}
          fun2={handleUserInput}
          value1={userInput.initialInvestment}
          value2={userInput.annualInvestment}
        />
        <UserInput
          label1="expectedReturn"
          label2="duration"
          fun1={handleUserInput}
          fun2={handleUserInput}
          value1={userInput.expectedReturn}
          value2={userInput.duration}
        />
      </section>
      <section>
        <Table getTableID="result" tableOutput={tableOutput} />
      </section>
    </>
  );
}

export default App;
