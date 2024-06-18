//Year                -> Duration
//Investment Value    -> investmentValue
//Interest (Year)     -> interestEarnedInYear
//Total interest      -> Map all interestEarnedInYear += interestEarnedInYear
//Invested capital    -> initialInvestment += annualInvestment

//table
//thead
//tbody - table body
//tr - Table Row
//th - Table header
//td - table data
import React from "react";
import { formatter } from "../util/investment.js";

export default function Table({ getTableID, tableOutput }) {
  return (
    <table id={getTableID}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {tableOutput.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.totalInterest)}</td>
              <td>{formatter.format(row.annualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
