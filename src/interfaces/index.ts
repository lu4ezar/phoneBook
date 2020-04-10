export interface PhoneNumber {
  id?: Readonly<string>;
  name: string;
  phone: string;
  email: string;
}

export interface PhoneBook {
  [id: string]: PhoneNumber;
}

export type Loading = "idle" | "pending";

export type Error = string | null;

export interface PhoneProps extends PhoneNumber {
  handleDelete: (id: PhoneNumber["id"]) => void;
}
