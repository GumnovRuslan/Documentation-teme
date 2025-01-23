import styled from "@emotion/styled";

const EditorWrapper = styled("section")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d6d6d6;
  }

  .ce-toolbar {
    z-index: 3;
  }

  .ce-block__content {
    max-width: 100%;
  }

  // .codex-editor__redactor {
  //   padding-bottom: 90px !important;
  // }
`;

export default EditorWrapper;
