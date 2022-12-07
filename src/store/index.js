import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";

const reducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userSlice.middleware]),
});

export default store;