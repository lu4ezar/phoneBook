import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  align-items: center;
  height: 100%;
  & span {
    flex: 1 0 25%;
  }
`;
