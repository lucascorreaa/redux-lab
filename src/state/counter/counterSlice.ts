import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1}
  }
})

export const { increment, decrement } = CounterSlice.actions

export default CounterSlice.reducer