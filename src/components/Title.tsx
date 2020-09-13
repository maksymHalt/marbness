import React, { FC, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FONTS } from '@src/styles';

const commonTitleStyles = css`
  margin: 0;
  font-family: ${FONTS.rubik};
`;

const HERO = styled.h1`
  ${commonTitleStyles}
  font-weight: 700;
  font-size: 88px;
  line-height: 104px;
`;
const H1 = styled.h2`
  ${commonTitleStyles}
  font-weight: 700;
  font-size: 40px;
  line-height: 1.45;
`;
const H2 = styled.h3`
  ${commonTitleStyles}
  font-weight: 500;
  font-size: 32px;
  line-height: 1.4;
`;
const H3 = styled.h4`
  ${commonTitleStyles}
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;
`;
const H4 = styled.h5`
  ${commonTitleStyles}
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;
const H5 = styled.h6`
  ${commonTitleStyles}
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
`;

const LEVELS = {
  0: HERO,
  1: H1,
  2: H2,
  3: H3,
  4: H4,
  5: H5
};

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  /** Set level of Heading element from 0 (Hero) to 5 (H5). Default: 0 (Hero) */
  level?: keyof typeof LEVELS;
}

const Title: FC<Props> = ({ level, ...props }) => {
  const H = LEVELS[level];
  return <H {...props} />;
};

export default Title;

Title.defaultProps = {
  level: 0
};
