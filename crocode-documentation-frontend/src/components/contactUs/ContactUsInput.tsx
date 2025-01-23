import styled from "@emotion/styled";

const ContactUsInput = styled.input`
  background: ${(props) => props.theme.palette.background.primary};
  border: 0.5px solid ${(props) => props.theme.palette.text.placeholder};
  border-radius: 2px;
  padding: 12px 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: ${(props) => props.theme.palette.text.placeholder};
`;

export default ContactUsInput;
