import styled from "@emotion/styled";

const DocumentTop = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.background.primary};
  border-bottom: 1px solid ${(props) => props.theme.palette.border};
  position: relative;
  width: 100%;

  @media (min-width: 768.1px) {
    align-items: center;
    padding: 22px 40px 22px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 10px;
    padding: 15px;
    margin-bottom: 40px;
  }
`;

export default DocumentTop;
