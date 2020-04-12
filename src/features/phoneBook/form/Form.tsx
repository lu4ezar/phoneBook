import React, { useReducer, FormEvent, SyntheticEvent } from "react";
import { StyledForm } from "./styled";
import { Reducer, State, Props } from "../../../interfaces/form";
import { selectLoading } from "../phoneBookSlice";
import { useSelector } from "react-redux";

const initialState: State = {
  name: "",
  phone: "",
  email: "",
};

const reducer = (state: State, { field, value, type }: Reducer) => {
  if (type === "reset") {
    return initialState;
  }
  return {
    ...state,
    [field as string]: value,
  };
};

const Form = (props: Props) => {
  const { data = initialState, onSubmit, onCancel } = props;
  const [state, dispatch] = useReducer(reducer, data);
  const { name, phone, email } = state;
  const loading = useSelector(selectLoading);
  const onChange = (e: SyntheticEvent) => {
    const { name, value } = e.currentTarget as HTMLInputElement;
    dispatch({ field: name, value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(state);
    dispatch({ type: "reset" });
  };

  const isEditing = !!props.data;
  const submitText =
    loading === "pending"
      ? "Wait..."
      : isEditing
      ? "Save changes"
      : "Add phone number";
  const disabled = !phone || !name || !email;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        name="phone"
        type="tel"
        value={phone}
        placeholder="phone"
        onChange={onChange}
      />
      <input
        name="name"
        type="text"
        value={name}
        placeholder="name"
        onChange={onChange}
      />
      <input
        name="email"
        type="email"
        value={email}
        placeholder="email"
        onChange={onChange}
      />
      {isEditing && <input type="button" value="Cancel" onClick={onCancel} />}
      <input type="submit" value={submitText} disabled={disabled} />
    </StyledForm>
  );
};

export default Form;
