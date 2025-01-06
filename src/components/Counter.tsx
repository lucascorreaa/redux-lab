import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { decrement, increment } from "../state/counter/counterSlice"

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return ( 
  <div>
    <h1>{count}</h1>
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  </div>)
}