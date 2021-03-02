import React from "react";
import { TrashIcon, PencilIcon } from "@primer/octicons-react";
import { StyledLi } from "./styled";
import { Props } from "../../interfaces/phone";

const Phone = ({ data, onDelete, onEdit }: Props) => {
  const { phone, name, email } = data;
  return (
    <StyledLi>
      <span>{phone}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span className="buttons">
        <div onClick={onDelete} title="delete">
          <TrashIcon size="medium" />
        </div>
        <div onClick={onEdit} title="edit">
          <PencilIcon size="medium" />
        </div>
      </span>
    </StyledLi>
  );
};

export default Phone;
