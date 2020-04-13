import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../api";
import { PhoneNumber, PhoneNumberId, PhoneBook } from "../../../interfaces";

export const fetchPhoneBook = createAsyncThunk(
  "phoneBook/fetchPhoneBook",
  async () => {
    const response = await api.fetchPhoneBook();
    const rawPhoneBook = await response.json();
    return Object.values(rawPhoneBook).filter(
      (phoneNumber) => phoneNumber
    ) as PhoneBook;
  }
);

export const createPhoneNumber = createAsyncThunk(
  "phoneBook/createPhoneNumber",
  async (data: PhoneNumber) => {
    try {
      const response = await api.createPhoneNumber(data);
      const res = await response.json();
      if (response.status !== 200) {
        throw new Error(res.message);
      }
      return res;
    } catch (err) {
      return { error: err.message };
    }
  }
);

export const deletePhoneNumber = createAsyncThunk(
  "phoneBook/deletePhoneNumber",
  async (id: PhoneNumberId) => {
    await api.deletePhoneNumber(id);
    return id;
  }
);

export const updatePhoneNumber = createAsyncThunk(
  "phoneBook/updatePhoneNumber",
  async (data: PhoneNumber) => {
    await api.updatePhoneNumber(data);
    return data;
  }
);
