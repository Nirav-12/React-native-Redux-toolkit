import { createSlice } from "@reduxjs/toolkit";
import { orderIceCream } from "./iceCreamSlice";

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

  // this is when orderIceCream action is called and we want to change in other slice state (here it is cakeSlice state also we want to change ) so it is called
  extraReducers: (builder) => {
    builder.addCase(orderIceCream, (state) => {
      state.noOfCake--;
    });
  },
});

export const { ordered, reStoke } = cakeSlice.actions;
export default cakeSlice.reducer;
