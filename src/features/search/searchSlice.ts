import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchString: (state, action) => action.payload,
  },
});

export const selectSearchString = (state: RootState) => state.search;

export default searchSlice.reducer;
