import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import phoneBookReducer from "./slices/phoneBook";
import editingIdReducer from "./slices/editingSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    editingId: editingIdReducer,
    search: searchReducer,
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
