import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { decrement, increment, incrementByAmount } from "../state/counter/counterSlice"

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return ( 
  <div>
    <h1>{count}</h1>
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>increment by amount</button>
    </div>
  </div>)
}