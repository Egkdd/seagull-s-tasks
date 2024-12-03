import { useState, useEffect } from "react";
import "../styles/StyleScreen.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const [size, setSize] = useState("4rem");

  useEffect(() => {
    if (input.length > 10) {
      setSize("1.5rem");
    } else if (input.length > 8) {
      setSize("2rem");
    } else if (input.length > 6) {
      setSize("3rem");
    } else {
      setSize("4rem");
    }
  }, [input]);

  const handleButtonClick = (value) => {
    const operators = ["+", "-", "*", "/"];

    if (input.length >= 14 && value !== "DEL" && value !== "AC") {
      return;
    }

    switch (value) {
      case "AC":
        setInput("");
        setHistory("");
        break;
      case "DEL":
        setInput(input.slice(0, -1));
        break;
      case "=":
        try {
          const result = eval(input);
          setHistory(input + " =");
          setInput(result.toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      default:
        if (operators.includes(value)) {
          if (operators.includes(input.slice(-1))) {
            setInput(input.slice(0, -1) + value);
          } else {
            setInput(input + value);
          }
        } else {
          setInput(input + value);
        }
        break;
    }
  };

  return (
    <>
      <div
        style={{
          height: "35%",
          position: "relative",
          backgroundColor: "#2a2e37",
          borderRadius: "2rem 2rem 0 0",
          margin: "0.3rem",
          marginTop: "0.3rem",
          marginBottom: "0",
        }}
      >
        <input
          style={{ fontSize: size / 2 }}
          type="text"
          className="historyField"
          value={history}
        ></input>
        <input
          style={{ fontSize: size }}
          type="text"
          className="inputField"
          value={input}
        ></input>
      </div>

      <div
        className="calculatorButtons"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 0.3fr)",
          gridTemplateRows: "repeat(5, 0.3fr)",
          height: "62.5%",
          backgroundColor: "#2f3646",
          border: "1px solid #293040",
          borderRadius: "0 0 2rem 2rem",
          margin: "0 0.3rem",
        }}
      >
        <button onClick={() => handleButtonClick("AC")}>AC</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("*")}>X</button>
        <button onClick={() => handleButtonClick("DEL")}>DEL</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button
          style={{ borderRadius: "0 0 2rem 0" }}
          onClick={() => handleButtonClick("=")}
        >
          =
        </button>

        <button
          style={{ borderRadius: "0 0 0 2rem" }}
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
      </div>
    </>
  );
}

export default Calculator;
