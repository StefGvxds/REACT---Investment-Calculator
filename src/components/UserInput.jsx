export default function UserInput({
  label1,
  label2,
  investment,
  fun1,
  fun2,
  value1,
  value2,
}) {
  return (
    <div className="input-group">
      <p>
        {" "}
        <label>{label1}</label>
        <input
          type="number"
          onChange={(event) => fun1(investment, event.target.value)}
          value={value1}
          required
        ></input>
      </p>
      <p>
        {" "}
        <label>{label2}</label>
        <input
          type="number"
          onChange={(event) => fun2(investment, event.target.value)}
          value={value2}
          required
        ></input>
      </p>
    </div>
  );
}
