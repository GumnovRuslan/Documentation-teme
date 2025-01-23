import styled from "@emotion/styled";

const DeleteIcon = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;

  & > svg {
    pointer-events: none;
  }
`;

export default DeleteIcon;
