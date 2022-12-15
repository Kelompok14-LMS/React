import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coursesService } from "../services/coursesService";
import { menteesService } from "../services/menteesService";

const reducer = combineReducers({
  [coursesService.reducerPath]: coursesService.reducer,
  [menteesService.reducerPath]: menteesService.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([coursesService.middleware], [menteesService.middleware]),
});

export { store };
