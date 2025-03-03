import styled from "@emotion/styled";

const ModalTrashContent = styled.div`
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 550px;

  @media (min-width: 768.1px) {
    padding: 40px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export default ModalTrashContent;
