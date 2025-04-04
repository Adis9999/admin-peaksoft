import { configureStore } from "@reduxjs/toolkit";
import bannersReducer from "./slices/bannersSlice";
import bidsReducer from "./slices/bidsSlice";

export const store = configureStore({
  reducer: {
    banners: bannersReducer,
    bids: bidsReducer,
  },
});
