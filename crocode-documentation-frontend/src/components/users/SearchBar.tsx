import styled from "@emotion/styled";

const SearchBar = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 115%;
  color: ${(props) => props.theme.palette.text.placeholder};
  width: 100%;
  outline: none;
`;

export default SearchBar;
