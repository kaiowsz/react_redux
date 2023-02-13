import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux'
import { increment, decrement, incrementAmount } from './features/counter/counterSlice';


export default function App() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()




  const [incAmount, setIncAmount] = useState(0)

  function handleChangeAmount(e: any) {
    setIncAmount(Number(e.target.value))
  }

  return (
    <div>App
      <p>Count is {count}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAmount(incAmount))}>incrementAmounT</button>

      <input type="number" placeholder="Increment Amount..." value={incAmount} onChange={(e) => handleChangeAmount(e)} />

      <p>{incAmount}</p>

    </div>
  )
}




// redux old

// const mapStateToProps = (state: any) => {
//   return {
//     count: state.counter.count
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"}),
//     incrementAmount: (incAmount: number) => dispatch({type: "incrementAmount", payload: incAmount})

//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App)