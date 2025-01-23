import styled from "@emotion/styled";

const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;

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
