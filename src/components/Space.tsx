import styled from '@emotion/styled';

interface Props {
  /** Direction of placing elements */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** Alignment of placed elements perpendicular to the base direction */
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Size of gap between placed elements */
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
