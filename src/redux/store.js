import { configureStore } from "@reduxjs/toolkit";
import iceCreamsReducer from "./iceCreamSlice";
export const store = configureStore({
  reducer: {
    iceCreams: iceCreamsReducer,
  },
});