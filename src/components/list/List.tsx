import React from "react";
import Phone from "../phone";
import { PhoneBook, Phone as IPhone } from "../../interfaces";

const List = ({ list }: { list: PhoneBook }) => (
  <ul>
    {list.map((phone: IPhone) => (
      <Phone {...phone} />
    ))}
  </ul>
);

export default List;
