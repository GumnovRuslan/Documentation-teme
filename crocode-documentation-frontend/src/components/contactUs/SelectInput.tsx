import styled from "@emotion/styled";

const SelectInput = styled.select`
  padding: 12px 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: ${(props) => props.theme.palette.text.placeholder};
  border: 0.5px solid ${(props) => props.theme.palette.text.placeholder};
`;

export default SelectInput;
