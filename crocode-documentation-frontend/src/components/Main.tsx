import styled from "@emotion/styled";

const Main = styled.main`
overflow: auto;
height: 100%;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d6d6d6;
  }
`

export default Main