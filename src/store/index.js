import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./features/profileSlice";

const reducer = combineReducers({
  [profileSlice.reducerPath]: profileSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([profileSlice.middleware]),
});

export default store;
