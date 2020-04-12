import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Editing } from "../../interfaces";

export const editingId = createSlice({
  name: "editingId",
  initialState: null as Editing,
  reducers: {
    setEditingId: (state, action: PayloadAction<Editing>) => action.payload,
    dropEditingId: (state) => null,
  },
});

export const { setEditingId, dropEditingId } = editingId.actions;

export default editingId.reducer;
