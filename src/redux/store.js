import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../redux/reducers/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
