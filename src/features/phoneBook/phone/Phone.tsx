import React from "react";
import { PhoneProps } from "../../../interfaces";

const Phone = ({ id, name, phone, email, handleDelete }: PhoneProps) => (
  <li>
    <span>{phone}</span>
    <span>{name}</span>
    <span>{email}</span>
    <button onClick={() => handleDelete(id)}>Delete</button>
    <br />
  </li>
);

export default Phone;
