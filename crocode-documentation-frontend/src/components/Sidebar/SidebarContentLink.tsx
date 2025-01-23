import styled from "@emotion/styled";
import { Link as routeLink } from "react-router-dom";

const SidebarContentLink = styled(routeLink)`
  font-weight: 400;
  font-size: 14px;
  line-height: 115%;
  color: #696969;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }
`;

export default SidebarContentLink;
