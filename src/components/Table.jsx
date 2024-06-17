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
          totalInterest += row.interest;
          return (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.valueEndOfYear.toFixed(2)}</td>
              <td>{row.interest.toFixed(2)}</td>
              <td>{totalInterest.toFixed(2)}</td>
              <td>{row.annualInvestment.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
