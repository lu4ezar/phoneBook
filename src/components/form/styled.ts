import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  padding: 0.5em;
  border-bottom: 1px solid silver;
  input:not([type="submit"]):not([type="button"]) {
    border: none;
  }
`;
