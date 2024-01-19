import React, { useState } from "react"
import "./Calculator.css"
import Container from "@mui/material/Container"

function Calculator() {
  const [num, setNum] = useState(0)
  const [oldnum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  function inputNum(event) {
    let input = event.target.value
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clear() {
    setNum(0)
  }

  function porcentage() {
    setNum(num / 100)
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandle(event) {
    let operatorInput = event.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function calculate() {
    if (operator === "/") {
      setNum(Number(oldnum) / Number(num))
    } else if (operator === "x") {
      setNum(Number(oldnum) * Number(num))
    } else if (operator === "-") {
      setNum(Number(oldnum) - Number(num))
    } else if (operator === "+") {
      setNum(Number(oldnum) + Number(num))
      console.log(oldnum)
      console.log(num)
    }
  }

  return (
    <Container maxWidth="xs">
      <div className="wrapper">
        <h1 className="result">{num}</h1>
        <div className="button-container">
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="orange" onClick={operatorHandle} value={"/"}>
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandle} value={"x"}>
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandle} value={"-"}>
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandle} value={"+"}>
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            .
          </button>
          <button className="orange" onClick={calculate} value={"="}>
            =
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Calculator
