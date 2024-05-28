export default function UserInput({ label1, label2, fun1, fun2 }) {
  return (
    <>
      <div className="input-group">
        <p>
          {" "}
          <label>{label1}</label>
          <input type="text" onChange={fun1}></input>
        </p>
        <p>
          {" "}
          <label>{label2}</label>
          <input type="text" onChange={fun2}></input>
        </p>
      </div>
    </>
  );
}
