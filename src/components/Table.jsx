//Year                -> Duration
//Investment Value    ->
//Interest (Year)     ->
//Total interest      ->
//Invested capital    ->

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
