import React, { FC, HTMLAttributes } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { COLORS, FONTS } from '@src/styles';
import { mq } from '@src/utils';

const commonButtonStyles = (fullWidth) => css`
  cursor: pointer;
  font-family: ${FONTS.rubik};
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  padding: 16px 54px;
  text-decoration: none;
  border: 0;
  ${fullWidth &&
  css`
    width: 100%;
  `}

  ${mq('T')} {
    padding: 12px 42px;
  }
`;

type StyledType = { as?: string; fullWidth?: boolean };

export const ButtonStyle = styled.button<StyledType>`
  ${({ fullWidth }) => commonButtonStyles(fullWidth)}
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

export const GhostButtonStyle = styled.button<StyledType>`
  ${({ fullWidth }) => commonButtonStyles(fullWidth)}
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

const SimpleStyle = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
`;

const TYPES = {
  default: ButtonStyle,
  ghostButton: GhostButtonStyle,
  simple: SimpleStyle
};

export interface ButtonType extends HTMLAttributes<HTMLButtonElement> {
  /** Type of appearance button element */
  type?: keyof typeof TYPES;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  fullWidth?: boolean;
  as?: string;
}

const Button: FC<ButtonType> = ({ type, htmlType, ...props }) => {
  const SelectedTypeButton = TYPES[type];
  return <SelectedTypeButton type={htmlType} {...props} />;
};

export default Button;

Button.defaultProps = {
  type: 'default',
  htmlType: 'button'
};
