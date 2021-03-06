import React, { useReducer, FormEvent, SyntheticEvent } from "react";
import { ClockIcon, PlusIcon, SyncIcon, XIcon } from "@primer/octicons-react";
import { StyledForm } from "./styled";
import { Reducer, State, Props } from "../../interfaces/form";
import { selectLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";

const initialState: State = {
  name: "",
  phone: "",
  email: ""
};

const reducer = (state: State, { field, value, type }: Reducer) => {
  if (type === "reset") {
    return initialState;
  }
  return {
    ...state,
    [field as string]: value
  };
};

const Form = ({
  data = initialState,
  isEditing = false,
  onSubmit,
  onCancel
}: Props) => {
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

  const disabled = !phone || !name || !email;

  return (
    <StyledForm onSubmit={handleSubmit} className={isEditing ? "editing" : ""}>
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
      <div className="quarter">
        {isEditing && (
          <span onClick={onCancel} title="cancel">
            <XIcon size="medium" />
          </span>
        )}
        <span
          className={disabled ? "disabled" : ""}
          onClick={disabled ? () => {} : handleSubmit}
          title="submit"
        >
          {loading === "pending" ? (
            <ClockIcon size="medium" />
          ) : isEditing ? (
            <SyncIcon size="medium" />
          ) : (
            <PlusIcon size="medium" />
          )}
        </span>
      </div>
    </StyledForm>
  );
};

export default Form;
