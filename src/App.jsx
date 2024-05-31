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

  function handleUserInput(selectIdentifier, newInput) {
    setUserInput((oldArray) => {
      return {
        ...oldArray,
        [selectIdentifier]: newInput,
      };
    });
  }

  // function handleGetOutput() {
  //   setGetOutput(
  //     (prevAr) =>
  //       (prevAr = calculateInvestmentResults({
  //         initialInvestment: initialInvestment,
  //         annualInvestment: annualInvestment,
  //         expectedReturn: expectedReturn,
  //         duration: duration,
  //       }))
  //   );
  //   console.log(getOutput);
  // }

  return (
    <>
      <Header idName="header" />

      <body>
        <section id="user-input">
          <UserInput
            label1="Initial Investment"
            label2="Annual Investment"
            fun1={handleUserInput()}
            fun2={handleUserInput()}
            updateTable={handleGetOutput}
          />
          <UserInput
            label1="Expected Return"
            label2="Duration"
            fun1={handleUserInput()}
            fun2={handleUserInput()}
            updateTable={handleGetOutput}
          />
        </section>
        <section>
          <Table getTableID="result" />
        </section>
      </body>
    </>
  );
}

export default App;

//https://www.youtube.com/watch?time_continue=512&v=Y62mbztjmus&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dreact%2BuseState%2Bupdate%2Barray%26oq%3Dreact%2BuseState%2Bupdate%2Barray%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTIICAEQA&source_ve_path=Mjg2NjIsMjg2NjY&feature=emb_logo
