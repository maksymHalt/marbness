import React from 'react'
import { Logo } from 'components/Icon'
import styled from '@emotion/styled'
import { FONTS } from 'styles'

const TYPES = {
  oneLine: () => (
    <OneLineContainer>
      <Logo />
      <Label>Marbness</Label>
    </OneLineContainer>
  ),
  twoLines: () => (
    <TwoLinesContainer>
      <Logo />
      <Label>Marbness</Label>
    </TwoLinesContainer>
  )
}

const Logotype = ({ type = 'oneLine' }) => TYPES[type]()

export default Logotype

const Label = styled.span`
  font-family: ${FONTS.rubik};
  font-weight: 700;
  font-size: 24px;
`

const OneLineContainer = styled.div`
  display: flex;
  align-items: center;

  ${Label} {
    margin-left: 16px;
  }
`
const TwoLinesContainer = styled.div`
  ${Label} {
    margin-top: 16px;
    display: block;
  }
`
