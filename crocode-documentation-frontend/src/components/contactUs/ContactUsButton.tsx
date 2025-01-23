import styled from "@emotion/styled";

const ContactUsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.palette.accent};
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
`;

export default ContactUsButton;
