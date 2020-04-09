import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import phoneBookReducer from "../features/phoneBook/phoneBookSlice";
import loadingReducer from "../features/phoneBook/loading/loadingSlice";
import errorReducer from "../features/phoneBook/error/errorSlice";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
