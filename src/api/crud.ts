import { PhoneNumber, PhoneNumberId } from "../interfaces";

const url = "https://phone-book-decentury.herokuapp.com/api/pb/";

export const fetchPhoneBook = () => fetch(url);

export const createPhoneNumber = (data: PhoneNumber) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { ...data } }),
  });

export const readPhoneNumberById = (id: PhoneNumberId) => fetch(url + id);

export const updatePhoneNumber = (data: PhoneNumber) =>
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { ...data } }),
  });

export const deletePhoneNumber = (id: PhoneNumberId) =>
  fetch(url + id, {
    method: "DELETE",
  });
