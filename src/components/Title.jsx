import React from 'react';
import styled from '@emotion/styled';
import { FONTS } from 'styles';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

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

const LEVELS = [HERO, H1, H2, H3, H4, H5];

const Title = ({ level, ...props }) => {
  const H = LEVELS[level];
  return <H {...props} />;
};

export default Title;

Title.propTypes = {
  level: PropTypes.oneOf(Object.keys(LEVELS).map(Number))
};

Title.defaultProps = {
  level: 0
};
