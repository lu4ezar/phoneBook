import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Phone from "../../../components/phone";
import { fetchPhoneBook, selectPhoneNumbers } from "../phoneBookSlice";

const List = () => {
  const phoneBook = useSelector(selectPhoneNumbers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhoneBook());
    return () => {
      dispatch(fetchPhoneBook());
    };
  }, [dispatch]);
  return (
    <ul>
      {Object.keys(phoneBook).map((id) =>
        phoneBook[id] ? <Phone key={id} {...phoneBook[id]} /> : null
      )}
    </ul>
  );
};

export default List;
