//Year                -> Duration
//Investment Value    -> investmentValue
//Interest (Year)     -> interestEarnedInYear
//Total interest      -> Map all interestEarnedInYear += interestEarnedInYear
//Invested capital    -> initialInvestment += annualInvestment

//table
//thead
//tbody
//tr - Table Row
//th - Table header
//td - table data

export default function Table({ getTableID }) {
  return (
    <>
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
      </table>
    </>
  );
}
