import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../state/counter_state";

export const counterStore = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof counterStore.dispatch;
export type RootState = ReturnType<typeof counterStore.getState>;
