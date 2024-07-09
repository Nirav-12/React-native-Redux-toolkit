import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increace: (state, action) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count--;
    },
  },
});

export const { increace, decrease } = counterSlice.actions;
export default counterSlice.reducer;
