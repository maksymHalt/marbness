import React, { FC, HTMLAttributes } from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { COLORS } from '@src/styles';
import { ButtonStyle, GhostButtonStyle } from './Button';

const A = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${COLORS.pinkSolid};
  }
`;

const Button = ButtonStyle.withComponent('a');

const GhostButton = GhostButtonStyle.withComponent('a');

const TYPES = {
  default: A,
  button: Button,
  ghostButton: GhostButton
};

export interface LinkType extends HTMLAttributes<HTMLAnchorElement> {
  /** Type of appearance link element */
  type?: keyof typeof TYPES;
  href: string;
  target?: '_blank' | '_self' | '_parent' | 'top';
}

const Link: FC<LinkType> = ({ type, href, ...props }) => {
  const SelectedTypeLink = TYPES[type];
  if (/(https?:\/\/)|((mailto|tel):)/.test(href)) {
    return <SelectedTypeLink href={href} {...props} />;
  }
  return (
    <NextLink href={href} passHref>
      <SelectedTypeLink {...props} />
    </NextLink>
  );
};

export default Link;

Link.defaultProps = {
  type: 'default',
  target: '_self'
};
