import React, { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSlice } from "../../redux/slices/searchSlice";
import { selectSearchString } from "../../redux/selectors";

const Input = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearchString);
  const { setSearchString } = searchSlice.actions;
  const handleChange = (e: SyntheticEvent) => {
    const { value } = e.currentTarget as HTMLInputElement;
    dispatch(setSearchString(value));
  };
  return (
    <input
      type="search"
      value={value}
      onChange={handleChange}
      placeholder="search"
    />
  );
};

export default Input;
