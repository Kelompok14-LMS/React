import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { courseService } from "../services/courseService";

const reducer = combineReducers({
  [courseService.reducerPath]: courseService.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([courseService.middleware]),
});

export default store;
