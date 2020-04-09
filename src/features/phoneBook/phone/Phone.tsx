import React from "react";
import { PhoneNumber } from "../../../interfaces";

const Phone = ({ name, phone, email }: PhoneNumber) => (
  <li>
    {phone} {name} {email}
  </li>
);

export default Phone;
