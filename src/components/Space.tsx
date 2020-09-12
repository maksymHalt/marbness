import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface Props {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  size?: number;
}

const Space = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};

  > :nth-of-type(n + 2) {
    margin-left: ${({ size }) => size || 10}px;
  }
`;

export default Space;
