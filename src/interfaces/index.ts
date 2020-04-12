export type PhoneNumberId = Readonly<string>;

export interface PhoneNumber {
  id?: PhoneNumberId;
  name: string;
  phone: string;
  email: string;
}

export type PhoneBook = PhoneNumber[];

export type Loading = "idle" | "pending";

export type Error = string | null;

export interface PhoneBookState {
  phoneBook: PhoneBook;
  loading: Loading;
  error: Error;
}

export type Editing = PhoneNumberId | null;
