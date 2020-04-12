import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Phone from "../phone";
import Form from "../form";
import {
  fetchPhoneBook,
  selectPhoneBook,
  deletePhoneNumber,
  updatePhoneNumber,
} from "../phoneBookSlice";
import {
  editingSelector,
  setEditingId,
  dropEditingId,
} from "../editing/editingSlice";
import { StyledUl } from "./styled";
import { PhoneNumber, PhoneNumberId } from "../../../interfaces";

const List = () => {
  const { data, loading, error } = useSelector(selectPhoneBook);
  const editingId = useSelector(editingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoneBook());
    return () => {
      dispatch(fetchPhoneBook());
    };
  }, [dispatch]);

  const handleSubmit = (data: PhoneNumber) => {
    dispatch(updatePhoneNumber(data));
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
      {Object.keys(data).map((id) =>
        id === editingId ? (
          <Form
            key={id}
            data={data[id] as PhoneNumber}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        ) : data[id] ? (
          <Phone
            key={id}
            data={data[id] as PhoneNumber}
            onDelete={(e) => handleDelete(id)}
            onEdit={(e) => handleEdit(id)}
          />
        ) : null
      )}
      {loading === "pending" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </StyledUl>
  );
};

export default List;
