import styled from "@emotion/styled";

const SidebarFooterButton = styled.button`
  padding: 17px 10px;
  color: ${(props) => props.theme.palette.text.placeholder};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  border-top: 1px solid ${(props) => props.theme.palette.border};

  &:hover {
    background-color: ${(props) => props.theme.palette.hover};
  }

  @media (min-width: 768.1px) {
    padding: 17px 10px;
  }

  @media (max-width: 768px) {
    padding: 13px 10px;
  }
`;

export default SidebarFooterButton;
