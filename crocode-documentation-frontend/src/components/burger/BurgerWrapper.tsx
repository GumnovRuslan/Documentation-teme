import styled from "@emotion/styled";

const BurgerWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 25px;
  height: 25px;

  @media (min-width: 768.1px) {
    display: none;
  }
`

export default BurgerWrapper