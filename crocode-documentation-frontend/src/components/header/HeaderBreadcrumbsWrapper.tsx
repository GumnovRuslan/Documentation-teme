import styled from "@emotion/styled";

const HeaderBreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    position: absolute;
    top: calc(100% + 10px);
  }
`;

export default HeaderBreadcrumbsWrapper;