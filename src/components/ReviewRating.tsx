import React, { FC } from 'react';
import styled from '@emotion/styled';
import { addProps, ValueOf } from '@src/utils';
import { COLORS } from '@src/styles';
import Title from './Title';
import { Star } from './Icon';

const STAR_SIZE = 20;
const GAP_SIZE = 8;

interface Props {
  score?: number;
  className?: string;
}

interface StarListProps {
  color?: ValueOf<typeof COLORS>;
}

interface StarTrackProps extends StarListProps {
  className?: string;
}

const StarTrack: FC<StarTrackProps> = ({ color, children, className }) => (
  <StarList color={color} className={className}>
    {Array(5)
      .fill(null)
      .map((_, i) => (
        <Star key={i} />
      ))}
    {children}
  </StarList>
);

const StarList = styled.div<StarListProps>`
  display: flex;
  color: ${({ color }) => color};

  > svg {
    width: ${STAR_SIZE}px;
    height: ${STAR_SIZE}px;
    flex-shrink: 0;

    &:nth-child(n + 2) {
      margin-left: ${GAP_SIZE}px;
    }
  }
`;

const ReviewRating: FC<Props> = ({ score, className }) => {
  return (
    <Container className={className}>
      <Score>{score}</Score>
      <StarContainer>
        <StarProgress score={score} />
      </StarContainer>
    </Container>
  );
};

export default ReviewRating;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Score = styled(addProps(Title, { as: 'div', level: 3 }))`
  line-height: 0.8;
  margin-right: 10px;
`;

const StarContainer = styled(addProps(StarTrack, { color: COLORS.lightGrey }))`
  position: relative;
`;
const StarProgress = styled(addProps(StarTrack, { color: COLORS.pinkSolid }))<Props>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ score }) => score * STAR_SIZE + Math.ceil(score - 1) * GAP_SIZE}px;
`;
