import styled from "@emotion/styled";

const InputError = styled.span`
  min-height: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 115%;
  color: #f44336;
  white-space: wrap;
  max-width: 400px;

  &:empty {
    display: none;
  }
`;

export default InputError;
