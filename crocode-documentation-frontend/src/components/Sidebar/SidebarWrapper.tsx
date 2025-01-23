import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

interface ISidebar {
  theme?: Theme;
  // isAttached: boolean;
  isOpen: boolean;
}

const dynamicStyles = ({ theme, isOpen }: ISidebar) => css`
  ${isOpen
    ? `
    @media (max-width: 768px) {
      background-color: ${theme?.palette.background.primary};
      box-shadow: ${theme?.shadows.modalMenu};
      transform:translateX(0);
    }

    &::before {
        z-index: -1;
        content: "";
        height: 100vh;
        position: absolute;
        transform: translateY(-8%);
        width: calc(100% + 50px);
        margin-top: 90px;
    }
    `
    : `
    box-shadow: ${theme?.shadows.bottom};
    background-color: ${theme?.palette.background.secondary};
    `}
`;

const SidebarWrapper = styled("aside")<ISidebar>`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  height: 100vh;

  @media (min-width: 768.1px) {
    width: 340px;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 0 5px 5px 0;
    z-index: 100;
    transform: translateX(-100%);
  }

  ${dynamicStyles};
`;

export default SidebarWrapper;
