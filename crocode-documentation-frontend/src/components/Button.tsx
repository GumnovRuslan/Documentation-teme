import styled from "@emotion/styled";

const Button = styled.button`
  background: #7dbe3b;
  color: #ffffff;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  transition: 0.2s;

  @media (min-width: 768.1px) {
    padding: 12px 24px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    padding: 6px 15px;
    font-size: 16px;
  }

  &:disabled {
    filter: grayscale(40%);
    opacity: 0.5;
  }
`;

export default Button;