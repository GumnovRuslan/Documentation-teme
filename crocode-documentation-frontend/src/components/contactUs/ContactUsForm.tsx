import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IProps {
  disabled: boolean;
}

const dynamicStyles = ({ disabled }: IProps) => css`
  ${disabled
    ? `
    opacity: 0.5;
    `
    : `
    opacity: 1;
    `}
`;

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  opacity: 0.5;
  ${dynamicStyles}

  @media (min-width: 768.1px) {
    max-width: 800px;
    padding: 40px 70px;
  }

  @media (max-width: 768px) {
    max-width: 450px;
    padding: 20px 20px;
  }
`;

export default ContactUsForm;
