import { css } from '@emotion/core';
import styled from '@emotion/styled';

interface Props {
  /** Direction of placing elements, default: row */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Alignment of placed elements perpendicular to the base direction, default: center */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Size of gap between placed elements, default: 10 */
  size?: number;
  /** Should stretch content by full width, default: false */
  stretchContent?: boolean;
}

const Space = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};

  > :nth-last-of-type(n + 2) {
    margin-right: ${({ size }) => size || 10}px;
  }

  ${({ stretchContent }) =>
    stretchContent &&
    css`
      > * {
        flex-grow: 1;
      }
    `}
`;

export default Space;
