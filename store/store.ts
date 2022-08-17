import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import isOpen from "./isOpen/isOpenSlice";
import theme from "./theme/themeSlice";
import post from "./post/postSlice";
import user from "./user/userRootReducer";

const rootRedcuer = combineReducers({
  isOpen,
  theme,
  post,
  user,
});

const store = configureStore({
  reducer: rootRedcuer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootReducerType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
