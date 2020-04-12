import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchString: (state, action) => action.payload,
  },
});

export default searchSlice.reducer;
