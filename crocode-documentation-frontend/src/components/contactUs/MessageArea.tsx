import styled from "@emotion/styled";

const MessageArea = styled.textarea`
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.theme.palette.text.placeholder};
  border: 0.5px solid ${(props) => props.theme.palette.text.placeholder};
  resize: vertical;
  min-height: 86px; 

  @media (min-width: 768.1px) {
    padding: 12px 24px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 16px;
  }
`;

export default MessageArea;
