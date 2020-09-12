import React, { FC, HTMLAttributes } from 'react';
import NextLink from 'next/link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { COLORS, FONTS } from '@src/styles';

const A = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${COLORS.pinkSolid};
  }
`;

const commonButtonStyles = css`
  cursor: pointer;
  font-family: ${FONTS.rubik};
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  padding: 16px 54px;
`;

const Button = styled.a`
  ${commonButtonStyles}
  color: ${COLORS.white};
  background: ${COLORS.pink};
  border-radius: 12px;
  box-shadow:
    0px 4px 20px rgba(243, 97, 132, 0.25),
    0px 2px 4px rgba(241, 109, 141, 0.1);

  &:hover {
    background: ${COLORS.lightViolet};
    box-shadow:
      0px 4px 20px rgba(143, 57, 223, 0.25),
      0px 2px 4px rgba(143, 57, 223, 0.1);
  }

  &:active {
    background: ${COLORS.violet};
    box-shadow:
      0px 4px 20px rgba(143, 57, 223, 0.25),
      0px 2px 4px rgba(143, 57, 223, 0.1);
  }

  &[disabled] {
    background: ${COLORS.lightGrey};
    box-shadow: none;
  }
`;

const GhostButton = styled.a`
  ${commonButtonStyles}
  color: ${COLORS.black};
  background: transparent;
  border-radius: 12px;
  border: 1px solid ${COLORS.pinkSolid};

  &:hover {
    border-color: ${COLORS.lightVioletSolid};
  }

  &:active {
    border-color: ${COLORS.violetSolid};
  }
`;

const TYPES = {
  default: A,
  button: Button,
  ghostButton: GhostButton
};

export interface LinkType extends HTMLAttributes<HTMLAnchorElement> {
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
    <NextLink href={href}>
      <SelectedTypeLink {...props} />
    </NextLink>
  );
};

export default Link;

Link.defaultProps = {
  type: 'default',
  target: '_self'
};
