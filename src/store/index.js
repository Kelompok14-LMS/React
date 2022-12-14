import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { assignmentSlice } from "./features/courses/assignmentSlice";
import { categorySlice } from "./features/courses/categorySlice";
import { courseSlice } from "./features/courses/courseSlice";
import { profileSlice } from "./features/user/profileSlice";

const reducer = combineReducers({
  [assignmentSlice.reducerPath]: assignmentSlice.reducer,
  [categorySlice.reducerPath]: categorySlice.reducer,
  [courseSlice.reducerPath]: courseSlice.reducer,
  [profileSlice.reducerPath]: profileSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [assignmentSlice.middleware],
      [categorySlice.middleware],
      [courseSlice.middleware],
      [profileSlice.middleware]
    ),
});

export default store;
