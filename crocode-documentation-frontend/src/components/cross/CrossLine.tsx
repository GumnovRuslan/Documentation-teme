import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IProps {
  position: 'left' | 'right';
}

const dynamicStyles = ({ position }: IProps) => css`
${position === 'left' ? `
    transform: translateY(50%) rotate(45deg);
  `
  : `
    transform: translateY(-50%) rotate(-45deg);
  `
}
`;

const CrossLine = styled('span')<IProps>`
  display: block;
  width: 100%;
  height: 1px;
  border-radius: 50px;
  background: #000;

  ${dynamicStyles};
`

export default CrossLine