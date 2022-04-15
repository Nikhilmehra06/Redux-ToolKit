import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./routeReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
