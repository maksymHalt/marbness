import React from 'react'
import styled from '@emotion/styled'
import { COLORS, FONTS } from 'src/styles'

const StyledComponent = styled.div`
  text-align: center;
  font-size: 20vh;
  line-height: 100vh;
  color: ${COLORS.black};
  font-family: ${FONTS.rubik};
`

const Home = () => {
  return <StyledComponent>Hello, Marbness!</StyledComponent>
}

export default Home
