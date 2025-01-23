import styled from "@emotion/styled";

const SidebarContent = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  flex: content;
  overflow: auto;

  @media (min-width: 768.1px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export default SidebarContent;
