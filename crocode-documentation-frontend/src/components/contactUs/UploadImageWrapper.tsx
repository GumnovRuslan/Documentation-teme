import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface IImage {
  image: string;
}

const dynamicStyles = ({ image }: IImage) => css`
  ${image
    ? `
    display: flex;
    align-items: start;
    `
    : `
    display: none;
    `}
`;

const UploadImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  ${dynamicStyles};
`;

export default UploadImageWrapper;
