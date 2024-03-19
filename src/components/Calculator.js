import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([""]);

  const add = (e) => {
    e.preventDefault();
    const newRes = result + input;
    setResult(newRes);
    setHistory([
      `${result} + ${input} = ${newRes.toLocaleString("en-US")}`,
      ...history,
    ]);
  };

  const subtract = (e) => {
    e.preventDefault();
    const newRes = result - input;
    setResult(newRes);
    setHistory([
      `${result} - ${input} = ${newRes.toLocaleString("en-US")}`,
      ...history,
    ]);
  };

  const multiply = (e) => {
    e.preventDefault();
    const newRes = result * input;
    setResult(newRes);
    setHistory([
      `${result} * ${input} = ${newRes.toLocaleString("en-US")}`,
      ...history,
    ]);
  };

  const divide = (e) => {
    e.preventDefault();
    const newRes = result / input;
    setResult(newRes);
    setHistory([
      `${result} / ${input} = ${newRes.toLocaleString("en-US")}`,
      ...history,
    ]);
  };

  return (
    <div id="calculator">
      <div>
        <h3>Total: {result.toLocaleString("en-US")}</h3>
        <input
          value={input == 0 ? "" : input}
          name="number"
          type="text"
          onChange={(e) => setInput(Number(e.target.value))}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          placeholder="0"
        />
        <div id="actions">
          <div id="operations">
            <button className="operationBtn" onClick={add}>
              Add
            </button>
            <button className="operationBtn" onClick={subtract}>
              Subtract
            </button>
            <button className="operationBtn" onClick={multiply}>
              Multiply
            </button>
            <button className="operationBtn" onClick={divide}>
              Divide
            </button>
          </div>

          <div id="reset">
            <button className="resetBtn" onClick={() => setInput(0)}>
              Reset Input
            </button>
            <button className="resetBtn" onClick={() => setResult(0)}>
              Reset Result
            </button>
          </div>
        </div>
      </div>
      <div id="history">
        <h3>History</h3>
        <div className="history-list">
          {history.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
