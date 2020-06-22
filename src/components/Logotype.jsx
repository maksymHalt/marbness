import React from 'react'
import { Logo } from 'components/Icon'
import styled from '@emotion/styled'
import { FONTS } from 'styles'

const Logotype = () => (
  <Container>
    <Logo />
    <Label>Marbness</Label>
  </Container>
)

export default Logotype

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.span`
  margin-left: 16px;
  font-family: ${FONTS.rubik};
  font-weight: 700;
  font-size: 24px;
`
