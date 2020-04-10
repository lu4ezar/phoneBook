import styled from "styled-components";

export const StyledApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 20%;
  & header {
    background: blanchedalmond;
    width: 100vw;
    align-self: center;
  }
  & main {
    padding: 2em;
  }
`;
