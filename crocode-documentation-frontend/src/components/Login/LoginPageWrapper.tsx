import styled from "@emotion/styled";

const LoginPageWrapper = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;
  width: 100%;

  @media (min-width: 768.1px) {
    padding: 40px 100px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    padding: 35px 15px;
    max-width: 400px;
  }
`;

export default LoginPageWrapper;
