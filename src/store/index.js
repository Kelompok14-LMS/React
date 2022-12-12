import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./features/courses/categorySlice";
import { courseSlice } from "./features/courses/courseSlice";
import { moduleSlice } from "./features/courses/moduleSlice";
import { profileSlice } from "./features/profileSlice";
import { signInSlice } from "./features/signInSlice";

const reducer = combineReducers({
  [categorySlice.reducerPath]: categorySlice.reducer,
  [courseSlice.reducerPath]: courseSlice.reducer,
  [moduleSlice.reducerPath]: moduleSlice.reducer,
  [signInSlice.reducerPath]: signInSlice.reducer,
  [profileSlice.reducerPath]: profileSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [courseSlice.middleware],
      [categorySlice.middleware],
      [moduleSlice.middleware],
      [signInSlice.middleware],
      [profileSlice.middleware]
    ),
});

export default store;
