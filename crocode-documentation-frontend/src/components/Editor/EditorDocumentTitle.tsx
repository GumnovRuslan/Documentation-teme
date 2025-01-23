import styled from "@emotion/styled";

const EditorDocumentTitle = styled.h1`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;

  @media (min-width: 768.1px) {
    padding: 0 100px;
    margin: 0 auto 40px;
    font-size: 36px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    margin: 0 auto 10px;
    font-size: 20px;
  }
`;

export default EditorDocumentTitle;
