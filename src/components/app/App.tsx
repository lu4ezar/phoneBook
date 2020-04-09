import React, { useState, SyntheticEvent } from "react";
import Input from "../input";
import List from "../list";
import { PhoneBook } from "../../interfaces";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState<PhoneBook>([]);

  const handleChange = (e: SyntheticEvent) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <header>Phone Book</header>
      <main>
        <Input value={value} onChange={handleChange} />
        <List list={list} />
      </main>
    </>
  );
};

export default App;
