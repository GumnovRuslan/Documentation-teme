import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IVariant {
  variant: string;
}

const dynamicStyles = ({ variant }: IVariant) => css`
  ${variant !== ""
    ? `
    
    @media (min-width: 768.1px) {
      padding-bottom: 22px;
    }

    @media (max-width: 768px) {
      padding-bottom: 10px;
    }
    `
    : null}
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  width: 100%;

  ${dynamicStyles}
`;

export default InputLabel;
