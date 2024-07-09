import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfCake--;
    },
    reStoke: (state, action) => {
      state.noOfCake += action.payload;
    },
  },
});

export const { ordered, reStoke } = cakeSlice.actions;
export default cakeSlice.reducer;
