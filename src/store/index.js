import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { assignmentSlice } from "./features/courses/assignmentSlice";
import { categorySlice } from "./features/courses/categorySlice";
import { courseSlice } from "./features/courses/courseSlice";
import { menteeAssignmentSlice } from "./features/mentees/menteeAssignmentSlice";
import { menteeSlice } from "./features/mentees/menteeSlice";
import { profileSlice } from "./features/user/profileSlice";
import { userSlice } from "./features/user/userSlice";

const reducer = combineReducers({
  [assignmentSlice.reducerPath]: assignmentSlice.reducer,
  [categorySlice.reducerPath]: categorySlice.reducer,
  [courseSlice.reducerPath]: courseSlice.reducer,
  [menteeSlice.reducerPath]: menteeSlice.reducer,
  [menteeAssignmentSlice.reducerPath]: menteeAssignmentSlice.reducer,
  [profileSlice.reducerPath]: profileSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [assignmentSlice.middleware],
      [categorySlice.middleware],
      [courseSlice.middleware],
      [menteeSlice.middleware],
      [menteeAssignmentSlice.middleware],
      [profileSlice.middleware],
      [userSlice.middleware]
    ),
});

export default store;
