import { PhoneNumber } from "./index";
import { SyntheticEvent } from "react";

export interface Props {
  data: Omit<PhoneNumber, "id">;
  onDelete: (e: SyntheticEvent) => void;
  onEdit: (e: SyntheticEvent) => void;
}
