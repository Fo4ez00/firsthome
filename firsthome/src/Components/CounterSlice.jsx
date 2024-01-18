import { createSlice } from "@reduxjs/toolkit";

const incrementCallback = (state) => {
  state.value += 1;
};

const decrementCallback = (state) => {
  state.value -= 1;
};

const createCounterSlice = () => {
  return createSlice({
    name: "counter",
    initialState: {
      value: 0,
    },
    reducers: {
      increment: incrementCallback,
      decrement: decrementCallback,
    },
  });
};

export { incrementCallback, decrementCallback };

const counterSlice = createCounterSlice();
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
