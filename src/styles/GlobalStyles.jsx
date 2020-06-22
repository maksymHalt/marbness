import React from 'react'
import { Global, css } from '@emotion/core'
import fontFaces from './font-faces'
import { FONTS, COLORS } from './variables'

const GlobalStyles = () => (
  <>
    {fontFaces}
    <Global styles={css`
      body {
        font-family: ${FONTS.karla};
        color: ${COLORS.black};
      }
    `}
    />
  </>
)

export default GlobalStyles
