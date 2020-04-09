import React, { SyntheticEvent } from "react";

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: SyntheticEvent) => void;
}) => <input value={value} onChange={onChange} />;

export default Input;
