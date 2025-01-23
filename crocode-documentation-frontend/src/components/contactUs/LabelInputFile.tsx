import styled from "@emotion/styled";

const LabelInputFile = styled.label`
  width: fit-content;
  border: 0.5px solid ${(props) => props.theme.palette.text.placeholder};

  @media (min-width: 768.1px) {
    padding: 12px 24px;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px
  }
`;

export default LabelInputFile;
