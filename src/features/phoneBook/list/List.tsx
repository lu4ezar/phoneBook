import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Phone from "../phone";
import Form from "../form";
import { selectPhoneBookState } from "../phoneBookSlice";
import {
  fetchPhoneBook,
  deletePhoneNumber,
  updatePhoneNumber,
} from "../asyncThunks";
import {
  editingSelector,
  setEditingId,
  dropEditingId,
} from "../editing/editingSlice";
import { StyledUl } from "./styled";
import { PhoneNumber, PhoneNumberId } from "../../../interfaces";

const List = () => {
  const { phoneBook, loading, error } = useSelector(selectPhoneBookState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoneBook());
    return () => {
      dispatch(fetchPhoneBook());
    };
  }, [dispatch]);

  const handleSubmit = (data: PhoneNumber, id: PhoneNumberId) => {
    dispatch(updatePhoneNumber({ ...data, id }));
    dispatch(dropEditingId());
  };

  const handleDelete = (id: PhoneNumberId) => {
    dispatch(deletePhoneNumber(id));
  };

  const handleEdit = (id: PhoneNumberId) => {
    dispatch(setEditingId(id));
  };

  const handleCancel = () => {
    dispatch(dropEditingId());
  };

  return (
    <StyledUl>
      {phoneBook.map(({ id, ...rest }) =>
        id === editingId ? (
          <Form
            key={id}
            data={rest}
            onCancel={handleCancel}
            onSubmit={(data) => handleSubmit(data, id)}
          />
        ) : (
          <Phone
            key={id}
            data={rest}
            onDelete={() => handleDelete(id as PhoneNumberId)}
            onEdit={() => handleEdit(id as PhoneNumberId)}
          />
        )
      )}
      {loading === "pending" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </StyledUl>
  );
};

export default List;
