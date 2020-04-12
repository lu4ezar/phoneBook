import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PhoneNumber } from "../../interfaces";

const selectPhoneNumbers = (state: RootState) => state.phoneBook.phoneBook;

export const selectPhoneBookState = (state: RootState) => state.phoneBook;

export const selectLoading = (state: RootState) => state.phoneBook.loading;

export const selectSearchString = (state: RootState) => state.search;

export const selectEditingId = (state: RootState) => state.editingId;

export const selectFiltered = createSelector(
  [selectPhoneNumbers, selectSearchString],
  (phoneBook, search) => {
    const filterPhoneNumbers = (phoneNumber: PhoneNumber) =>
      Object.values(phoneNumber).filter((value) => value.includes(search))
        .length > 0;
    return phoneBook.filter(filterPhoneNumbers);
  }
);
