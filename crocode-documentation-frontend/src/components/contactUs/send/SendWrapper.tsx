import styled from "@emotion/styled";

const SendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 700px;
    padding: 40px 70px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px;
  }
`

export default SendWrapper