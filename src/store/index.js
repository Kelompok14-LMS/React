import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./features/user/profileSlice";
import { signInSlice } from "./features/user/signInSlice";

const reducer = combineReducers({
  [profileSlice.reducerPath]: profileSlice.reducer,
  [signInSlice.reducerPath]: signInSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([profileSlice.middleware], [signInSlice.middleware]),
});

export default store;
