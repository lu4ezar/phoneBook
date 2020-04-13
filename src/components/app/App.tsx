import React from "react";
import Input from "../input";
import List from "../list";
import Form from "../form";
import { StyledApp } from "./styled";
import { useDispatch } from "react-redux";
import { createPhoneNumber } from "../../redux/slices/phoneBook/asyncActions";
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
