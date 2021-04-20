import React from "react";
import "./styles.css";
const { useState } = React;

function Enter(props) {
  return (
    <div
      className="calBtn"
      onClick={() => {
        switch (props.opt) {
          case "+":
            props.setAns(Number(props.input) + Number(props.input2));
            break;
          case "-":
            props.setAns(Number(props.input) - Number(props.input2));
            break;
          case "*":
            props.setAns(Number(props.input) * Number(props.input2));
            break;
          case "/":
            props.setAns(Number(props.input) / Number(props.input2));
            break;

          default:
            console.log("no input to calculate");
        }
      }}
    >
      =
    </div>
  );
}

function Del(props) {
  return (
    <div
      className="calBtn"
      onClick={() => {
        if (props.input2 === 0 && props.opt === null) {
          let str = String(props.input);
          let num = str.substring(0, str.length - 1);
          props.setInput(Number(num));
          console.log(props.input);
        } else if (props.input2 === 0) {
          props.setOpt(null);
        } else {
          let str = String(props.input2);
          props.setInput2(Number(str.substring(0, str.length - 1)));
          console.log(props.input2);
        }
      }}
    >
      del
    </div>
  );
}
function AllClear(props) {
  return (
    <div
      className="calBtn"
      onClick={() => {
        props.setAns(0);
        props.setInput(0);
        props.setInput2(0);
        props.setOpt(null);
      }}
    >
      AC
    </div>
  );
}

function InputNum(props) {
  return (
    <div
      className="numBtn"
      onClick={() => {
        if (props.opt === null) {
          if (props.input === 0 && Number(props.value) === 0) {
            props.setInput(0);
          } else if (props.input === 0) {
            props.setInput(props.value);
          } else {
            props.setInput(props.input + props.value);
          }
        } else {
          if (props.input2 === 0 && Number(props.value) === 0) {
            props.setInput2(0);
          } else if (props.input2 === 0) {
            props.setInput2(props.value);
          } else {
            props.setInput2(props.input2 + props.value);
          }
        }
      }}
    >
      {props.value}
    </div>
  );
}

function Operand(props) {
  return (
    <div
      className="numBtn"
      onClick={() => {
        if (props.input === 0 && props.input2 === 0) {
          props.setOpt(null);
        } else if (props.input2 === 0) {
          console.log("input2 no value");
          console.log(props.opt);

          props.setOpt(props.value);
        } else {
          switch (props.opt) {
            case "+":
              props.setInput(Number(props.input) + Number(props.input2));
              props.setInput2(0);
              props.setOpt(props.value);
              break;
            case "-":
              props.setInput(Number(props.input) - Number(props.input2));
              props.setInput2(0);
              props.setOpt(props.value);
              break;
            case "*":
              props.setInput(Number(props.input) * Number(props.input2));
              props.setInput2(0);
              props.setOpt(props.value);
              break;
            case "/":
              props.setInput(Number(props.input) / Number(props.input2));
              props.setInput2(0);
              props.setOpt(props.value);
              break;
            default:
              console.log("no this case");
          }
          console.log(props.opt);
        }
      }}
    >
      {props.value}
    </div>
  );
}

const Calculator = () => {
  const operand = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operator = ["+", "-", "*", "/"];

  let [input2, setInput2] = useState(0);
  let [ans, setAns] = useState(0);
  let [input, setInput] = useState(0);
  let [opt, setOpt] = useState(null);

  return (
    <div className="App">
      <div className="numDiv">
        {operand.map((ele) => (
          <InputNum
            key={ele}
            value={ele}
            input={input}
            setInput={setInput}
            input2={input2}
            setInput2={setInput2}
            opt={opt}
            setOpt={setOpt}
          />
        ))}
      </div>

      <div className="functionDiv">
        {operator.map((ele) => (
          <Operand
            key={ele}
            value={ele}
            input={input}
            setInput={setInput}
            input2={input2}
            setInput2={setInput2}
            opt={opt}
            setOpt={setOpt}
          />
        ))}
      </div>

      <div className="calDiv">
        <AllClear
          setInput={setInput}
          setInput2={setInput2}
          setOpt={setOpt}
          setAns={setAns}
        />

        <Enter input={input} input2={input2} opt={opt} setAns={setAns} />

        <Del
          input={input}
          setInput={setInput}
          input2={input2}
          setInput2={setInput2}
          opt={opt}
          setOpt={setOpt}
        />
      </div>

      <div className="formula">{input}</div>
      <div className="formula">{opt}</div>
      <div className="formula">{input2}</div>

      <h1>answer:{ans}</h1>
    </div>
  );
};

export default Calculator;
