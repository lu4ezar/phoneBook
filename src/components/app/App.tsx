import React from "react";
import Input from "../input";
import List from "../../features/phoneBook/list";
import Form from "../../features/phoneBook/form";
import { StyledApp } from "./styled";
import { useDispatch } from "react-redux";
import { createPhoneNumber } from "../../features/phoneBook/asyncThunks";
import { PhoneNumber } from "../../interfaces";

const App = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data: PhoneNumber) => {
    dispatch(createPhoneNumber(data));
  };

  return (
    <StyledApp>
      <header>
        <h1>Phone Book</h1>
      </header>
      <main>
        <Input />
        <List />
        <Form onSubmit={handleSubmit} />
      </main>
    </StyledApp>
  );
};

export default App;
