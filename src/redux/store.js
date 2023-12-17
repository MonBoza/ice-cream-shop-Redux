import { configureStore } from "@reduxjs/toolkit";
import iceCreamsReducer from "./iceCreamSliceSlice";
export const store = configureStore({
  reducer: {
    iceCreams: iceCreamsReducer,
  },
});