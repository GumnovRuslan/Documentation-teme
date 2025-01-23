import styled from "@emotion/styled";
import { Link as routerLink } from "react-router-dom";

const DocumentTopButton = styled(routerLink)`
  padding: 6px 12px;
  border: 0.5px solid #000000;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
  line-height: 115%;
  transition: 0.3s;
  height: 30px;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default DocumentTopButton;
