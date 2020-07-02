import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'styles';

const A = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: ${COLORS.pink};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Button = styled.a`
  cursor: pointer;
  font-family: ${FONTS.rubik};
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.white};
  text-transform: uppercase;
  padding: 16px 54px;
  background: ${COLORS.pink};
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(243, 97, 132, 0.25), 0px 2px 4px rgba(241, 109, 141, 0.1);

  &:hover {
    opacity: 0.8;
  }
`;

const TYPES = {
  default: A,
  button: Button
};

const Link = ({ type, href, ...props }) => {
  const SelectedTypeLink = TYPES[type];
  if (/(https?:\/\/)|((mailto|tel):)/.test(href)) {
    return <SelectedTypeLink href={href} {...props} />;
  }
  return (
    <NextLink href={href}>
      <SelectedTypeLink {...props} />
    </NextLink>
  );
};

export default Link;

Link.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPES)),
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', 'top'])
};

Link.defaultProps = {
  type: 'default',
  target: '_self'
};
