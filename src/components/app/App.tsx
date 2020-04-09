import React, { useState, SyntheticEvent } from "react";
import Input from "../input";
import List from "../../features/phoneBook/list";
import Form from "../../features/phoneBook/form";
import { StyledApp } from "./styled";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: SyntheticEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <StyledApp>
      <header>
        <h1>Phone Book</h1>
      </header>
      <main>
        <Input value={value} onChange={handleChange} />
        <List />
        <Form />
      </main>
    </StyledApp>
  );
};

export default App;
