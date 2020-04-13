import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  padding: 0.5em 0;
  border-bottom: 1px solid silver;
  height: 3em;
  &.editing {
    color: red;
    border-radius: 4px;
    background: lightgray;
    input {
      background: lightgray;
      color: purple;
      font-size: 1.2em;
      font-weight: bold;
    }
  }
  input,
  .quarter {
    flex: 1 0 25%;
  }
  .quarter {
    display: flex;
    justify-content: flex-end;
  }

  input:not([type="submit"]):not([type="button"]) {
    border: none;
  }
  & svg {
    padding: 0 1em;
    cursor: pointer;
  }
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
    padding-right: 2em;
  }
`;
