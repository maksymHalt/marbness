import React from 'react'
import { Global, css } from '@emotion/core'
import fontFaces from './font-faces'
import { FONTS } from './variables'

const GlobalStyles = () => (
  <Global styles={[css`
    body {
      font-family: ${FONTS.karla}
    }
  `, fontFaces]}
  />
)

export default GlobalStyles
