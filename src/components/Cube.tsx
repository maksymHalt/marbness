import styled from '@emotion/styled';
import { css } from '@emotion/core';

interface Props {
  size: number;
  color: 'saturated' | 'faded';
}

const Cube = styled.div<Props>`
  position: absolute;
  mix-blend-mode: multiply;
  border-radius: 12px;
  transform: rotate(-28.51deg);
  ${({ size, color }) => css`
    width: ${size}px;
    height: ${size}px;
    ${color === 'saturated' &&
    css`
      background: linear-gradient(311.12deg, #aa66e9 0%, #9340e0 100%);
      box-shadow: 0px 4px 20px rgba(156, 80, 228, 0.25),
        0px 2px 4px rgba(160, 86, 229, 0.1);
    `}
    ${color === 'faded' &&
    css`
      background: #fafaff;
    `}
  `}
`;

export default Cube;
