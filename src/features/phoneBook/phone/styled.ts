import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 100%;
  flex: 1;
  border-bottom: 1px solid silver;
  align-items: center;
  & span {
    flex: 1 0 33%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Buttons = styled.div`
  display: flex;
`;
