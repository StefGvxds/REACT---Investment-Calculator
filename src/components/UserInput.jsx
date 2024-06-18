export default function UserInput({
  label1,
  label2,
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
          onChange={(event) => fun1(label1, event.target.value)}
          name={label1}
          value={value1}
          required
        ></input>
      </p>
      <p>
        {" "}
        <label>{label2}</label>
        <input
          type="number"
          onChange={(event) => fun2(label2, event.target.value)}
          name={label2}
          value={value2}
          required
        ></input>
      </p>
    </div>
  );
}
