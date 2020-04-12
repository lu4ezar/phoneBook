import { createSlice } from "@reduxjs/toolkit";
import { PhoneBook, PhoneBookState } from "../../interfaces";
import {
  fetchPhoneBook,
  createPhoneNumber,
  deletePhoneNumber,
  updatePhoneNumber,
} from "../asyncThunks";

const initialState: PhoneBookState = {
  phoneBook: [] as PhoneBook,
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
        state.phoneBook = action.payload;
      })
      .addCase(createPhoneNumber.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createPhoneNumber.fulfilled, (state, action) => {
        state.loading = "idle";
        action.payload.error
          ? (state.error = action.payload.error)
          : state.phoneBook.push({
              ...action.payload,
            });
      })
      .addCase(deletePhoneNumber.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(deletePhoneNumber.fulfilled, (state, action) => {
        state.loading = "idle";
        state.phoneBook = state.phoneBook.filter(
          ({ id }) => id !== action.payload
        );
      })
      .addCase(updatePhoneNumber.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(updatePhoneNumber.fulfilled, (state, action) => {
        state.loading = "idle";
        const index = state.phoneBook.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.phoneBook.splice(index, 1, action.payload);
      });
  },
});

export default phoneBookSlice.reducer;
