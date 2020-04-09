import React from "react";
import { Phone as IPhone } from "../../interfaces";

const Phone = ({ id, name, phone, email }: IPhone) => (
  <li>
    {phone} {name} {email}
  </li>
);

export default Phone;
