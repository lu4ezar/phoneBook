import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PhoneBook, PhoneBookState, PhoneNumberId } from "../../interfaces";
import {
  fetchPhoneBook,
  createPhoneNumber,
  deletePhoneNumber,
  updatePhoneNumber,
} from "./asyncThunks";

const initialState: PhoneBookState = {
  data: {} as PhoneBook,
  loading: "idle",
  error: null as PhoneBookState["error"],
};

export const phoneBookSlice = createSlice({
  name: "phoneBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhoneBook.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchPhoneBook.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = { ...action.payload };
      })
      .addCase(createPhoneNumber.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createPhoneNumber.fulfilled, (state, action) => {
        state.loading = "idle";
        action.payload.error
          ? (state.error = action.payload.error)
          : (state.data[action.payload.id as PhoneNumberId] = {
              ...action.payload,
            });
      })
      .addCase(deletePhoneNumber.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(deletePhoneNumber.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data[action.payload] = null;
      })
      .addCase(updatePhoneNumber.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(updatePhoneNumber.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data[action.payload.id as PhoneNumberId] = {
          ...action.payload,
        };
      });
  },
});

export const selectPhoneBook = (state: RootState) => state.phoneBook;
export const selectLoading = (state: RootState) => state.phoneBook.loading;

export default phoneBookSlice.reducer;
