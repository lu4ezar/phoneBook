import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  align-items: center;
  & span {
    display: flex;
    flex: 1 0 25%;
    & svg {
      padding: 1em;
      cursor: pointer;
    }
    &.buttons {
      justify-content: flex-end;
    }
  }
`;
