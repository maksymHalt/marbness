import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Body = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: ${({ weight }) => weight};
`;
const BodyBig1 = styled(Body)`
  font-size: 16px;
`;
const BodyBig2 = styled(BodyBig1)`
  text-transform: uppercase;
`;
const Tiny = styled(Body)`
  font-size: 12px;
`;
const Caption = styled(Tiny)`
  line-height: 1.6;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const TYPES = {
  body: Body,
  bodyBig1: BodyBig1,
  bodyBig2: BodyBig2,
  tiny: Tiny,
  caption: Caption
};

const Text = ({ type, ...props }) => {
  const T = TYPES[type];
  return <T {...props} />;
};

export default Text;

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPES)),
  weight: PropTypes.oneOf(['normal', 'bold']),
  as: PropTypes.string
};

Text.defaultProps = {
  type: 'body',
  weight: 'normal',
  as: 'p'
};
