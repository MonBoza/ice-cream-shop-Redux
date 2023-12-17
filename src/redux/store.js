import { configureStore } from "@reduxjs/toolkit";
import iceCreamReducer from "./iceCreamSlice";


export const store = configureStore({
  reducer: {
    iceCream: iceCreamReducer,
  },
});