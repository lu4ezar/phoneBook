import { PhoneNumber } from "./index";

export type Reducer = Partial<{
  field: string;
  value: string;
  type: string;
}>;

export type State = Omit<PhoneNumber, "id">;

export interface Props {
  data?: PhoneNumber;
  isEditing?: boolean;
  onSubmit: (data: PhoneNumber) => void;
  onCancel?: () => void;
}
