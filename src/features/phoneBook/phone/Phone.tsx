import React from "react";
import { StyledLi } from "./styled";
import { Props } from "../../../interfaces/phone";

const Phone = ({ data, onDelete, onEdit }: Props) => {
  const { phone, name, email } = data;
  return (
    <StyledLi>
      <span>{phone}</span>
      <span>{name}</span>
      <span>{email}</span>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </StyledLi>
  );
};

export default Phone;
