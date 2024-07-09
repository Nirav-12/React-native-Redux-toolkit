import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import cakeSlice from "./slice/cakeSlice";
import iceCreamSlice from "./slice/iceCreamSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
} from "redux-persist";
import movieSlice from "./slice/movieSlice";

const rootReducer = combineReducers({
  count: counterSlice,
  cake: cakeSlice,
  iceCream: iceCreamSlice,
  movies: movieSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["count"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // this middleware is of no use it is use to remove warning https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
