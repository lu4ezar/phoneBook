import { PhoneNumber } from "./interfaces";

const url = "https://phone-book-decentury.herokuapp.com/api/pb/";

export const fetchPhoneBook = () => fetch(url).then((res) => res.json());

export const createPhoneNumber = (data: PhoneNumber) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { ...data } }),
  }).then((res) => res.json());

export const readPhoneNumberById = (id: PhoneNumber["id"]) =>
  fetch(url + id).then((res) => res.json());

export const updatePhoneNumber = (data: PhoneNumber) =>
  fetch(url + data.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { ...data } }),
  }).then((res) => res.json());

export const deletePhoneNumber = (id: PhoneNumber["id"]) =>
  fetch(url + id, {
    method: "DELETE",
  }).then(() => id);
