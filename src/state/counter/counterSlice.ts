import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    decrement: (state) => {state.value -= 1},
    incrementByAmount: (state, action: PayloadAction<number>) => {state.value += action.payload}
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.value += action.payload
    })
  }
})
// exemplo para caso tenha consumo de API
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)

export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer