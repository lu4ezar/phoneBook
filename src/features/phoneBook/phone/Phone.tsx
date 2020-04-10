import React from "react";
import { PhoneProps } from "../../../interfaces";

const Phone = ({ id, name, phone, email, handleDelete }: PhoneProps) => (
  <li>
    {phone} {name} {email}
  </li>
);

export default Phone;
