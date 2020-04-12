import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import phoneBookReducer from "./features/phoneBook/phoneBookSlice";
import editingIdReducer from "./features/phoneBook/editing/editingSlice";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    editingId: editingIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
