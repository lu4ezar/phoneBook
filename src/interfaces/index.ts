export interface PhoneNumber {
  id?: string;
  name: string;
  phone: string;
  email: string;
}

export interface PhoneBook {
  [id: string]: PhoneNumber;
}

export type Loading = "idle" | "pending";

export type Error = string | null;
