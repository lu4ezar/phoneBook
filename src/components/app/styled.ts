import styled from "styled-components";

export const StyledApp = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & header {
    background: blanchedalmond;
    width: 100vw;
    align-self: center;
  }
  & h1 {
    width: max-content;
    position: relative;
    left: 20%;
  }
  & main {
    padding: 2em 0;
  }
`;
