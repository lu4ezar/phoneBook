export type PhoneNumberId = Readonly<string>;

export interface PhoneNumber {
  id?: PhoneNumberId;
  name: string;
  phone: string;
  email: string;
}

export interface PhoneBook {
  [id: string]: PhoneNumber | null;
}

export type Loading = "idle" | "pending";

export type Error = string | null;

export interface PhoneBookState {
  data: PhoneBook;
  loading: Loading;
  error: Error;
}

export type Editing = PhoneNumberId | null;
