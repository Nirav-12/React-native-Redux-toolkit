import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import cakeSlice from "./slice/cakeSlice";
import iceCreamSlice from "./slice/iceCreamSlice";

const store = configureStore({
  reducer: {
    count: counterSlice,
    cake: cakeSlice,
    iceCream: iceCreamSlice,
  },
});

export default store;
