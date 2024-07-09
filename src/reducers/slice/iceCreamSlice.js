import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    orderIceCream: (state, action) => {
      state.noOfIceCream--;
    },
    reStokeIceCream: (state, action) => {
      state.noOfIceCream += action.payload;
    },
  },
});

export const { orderIceCream, reStokeIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
