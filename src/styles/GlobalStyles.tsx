import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import fontFaces from './font-faces';
import { FONTS, COLORS } from './variables';

const GlobalStyles: FC = () => (
  <>
    {fontFaces}
    <Global
      styles={css`
        body {
          font-family: ${FONTS.karla};
          color: ${COLORS.black};
          width: 100vw;
          overflow-x: hidden;
        }
      `}
    />
  </>
);

export default GlobalStyles;
