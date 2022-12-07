import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./features/courseSlice";
import { userSlice } from "./features/userSlice";

const reducer = combineReducers({
  [courseSlice.reducerPath]: courseSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([courseSlice.middleware, userSlice.middleware]),
});

export default store;