import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./features/courseSlice";

const reducer = combineReducers({
  [courseSlice.reducerPath]: courseSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([courseSlice.middleware]),
});

export default store;
