import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PhoneBook, PhoneBookState, PhoneNumber } from "../../interfaces";
import {
  fetchPhoneBook,
  createPhoneNumber,
  deletePhoneNumber,
  updatePhoneNumber,
} from "./asyncThunks";
import { selectSearchString } from "../search/searchSlice";

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

export const selectPhoneBookState = (state: RootState) => state.phoneBook;

export const selectPhoneNumbers = (state: RootState) =>
  state.phoneBook.phoneBook;

export const selectLoading = (state: RootState) => state.phoneBook.loading;

export const selectFiltered = createSelector(
  [selectPhoneNumbers, selectSearchString],
  (phoneBook, search) => {
    const filterPhoneNumbers = (phoneNumber: PhoneNumber) =>
      Object.values(phoneNumber).filter((value) => value.includes(search))
        .length > 0;
    return phoneBook.filter(filterPhoneNumbers);
  }
);

export default phoneBookSlice.reducer;
