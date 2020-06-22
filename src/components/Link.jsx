import React, { forwardRef } from 'react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { COLORS, FONTS } from 'styles'

const TYPES = {
  default: forwardRef((props, ref) => (<A {...props} ref={ref} />)),
  button: forwardRef((props, ref) => (<Button {...props} ref={ref} />))
}

const Link = ({ type = 'default', href, ...props }) => {
  const SelectedTypeLink = TYPES[type]
  return <NextLink href={href}><SelectedTypeLink {...props} /></NextLink>
}

export default Link

const A = styled.a`
  cursor: pointer;

  &:hover {
    background: ${COLORS.pink};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

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
  box-shadow:
    0px 4px 20px rgba(243, 97, 132, 0.25),
    0px 2px 4px rgba(241, 109, 141, 0.1);

  &:hover {
    opacity: 0.8;
  }
`
