import React, { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchString,
  searchSlice,
} from "../../features/search/searchSlice";

const Input = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearchString);
  const { setSearchString } = searchSlice.actions;
  const handleChange = (e: SyntheticEvent) => {
    const { value } = e.currentTarget as HTMLInputElement;
    dispatch(setSearchString(value));
  };
  return <input value={value} onChange={handleChange} />;
};

export default Input;
