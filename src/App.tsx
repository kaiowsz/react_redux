import React, { useState } from 'react'
import { connect } from 'react-redux'

function handleOnClick() {

}

interface PropsApp {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementAmount: (incAmount: number) => void;
}

function App({count, increment, decrement, incrementAmount}: PropsApp) {
  const [incAmount, setIncAmount] = useState(0)

  function handleChangeAmount(e: any) {
    setIncAmount(Number(e.target.value))
  }

  return (
    <div>App
      <p>Count is {count}</p>

      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => incrementAmount(incAmount)}>incrementAmounT</button>

      <input type="number" placeholder="Increment Amount..." value={incAmount} onChange={(e) => handleChangeAmount(e)} />

      <p>{incAmount}</p>

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"}),
    incrementAmount: (incAmount: number) => dispatch({type: "incrementAmount", payload: incAmount})

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)