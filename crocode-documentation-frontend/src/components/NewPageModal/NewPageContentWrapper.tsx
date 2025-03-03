import styled from "@emotion/styled";

const NewPageContentWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 100px;
  width: 90%;
  max-width: 600px;
  background: ${(props) => props.theme.palette.background.primary};

  @media (min-width: 768.1px) {
    padding: 40px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px 30px;
  }
`;

export default NewPageContentWrapper;
