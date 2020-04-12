import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import { PhoneNumber, PhoneNumberId } from "../../interfaces";

export const fetchPhoneBook = createAsyncThunk(
  "phoneBook/fetchPhoneBook",
  async (state) => {
    const response = await api.fetchPhoneBook();
    return response.json();
  }
);

export const createPhoneNumber = createAsyncThunk(
  "phoneBook/createPhoneNumber",
  async (data: PhoneNumber, thunkAPI) => {
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
  async (id: PhoneNumberId, thunkAPI) => {
    await api.deletePhoneNumber(id);
    return id;
  }
);

export const updatePhoneNumber = createAsyncThunk(
  "phoneBook/updatePhoneNumber",
  async (data: PhoneNumber, thunkAPI) => {
    await api.updatePhoneNumber(data);
    return data;
  }
);
