import styled from "@emotion/styled";

const EditorContainer = styled("div")`
  width: 100%;
  position: relative;
  height: 100%;

  .codex-editor {
    height: 100%;

    &__redactor {
      min-height: 100%;
    }
  }
  .image-tool__image-picture {
    width: 100%;
  }

  @media (min-width: 768.1px) {
    padding: 0 100px;
    font-size: 20px
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    font-size: 14px
  }

  
`;

export default EditorContainer;
