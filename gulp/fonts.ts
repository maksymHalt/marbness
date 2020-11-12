import { src, dest, parallel } from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import fs from 'fs';

const SRC = 'src/fonts/*.ttf';
const DEST = 'public/fonts';
const FILE = 'src/styles/font-faces.tsx';

const FONT_WEIGHTS = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900
};

const generateWoff = (): NodeJS.ReadWriteStream => {
  fs.existsSync(DEST) && fs.rmdirSync(DEST, { recursive: true });

  return src(SRC)
    .pipe(dest(DEST))
    .pipe(ttf2woff())
    .pipe(src(SRC))
    .pipe(ttf2woff2())
    .pipe(dest(DEST));
};

const fileTemplate = (fontFaceTemplateList: string[]) => `import React from 'react';

/* eslint-disable react/jsx-closing-tag-location */
const fontFaces = (
  <style global jsx>{\`
    ${fontFaceTemplateList.join('\n    ')}
  \`}</style>
);
/* eslint-enable react/jsx-closing-tag-location */

export default fontFaces;
`;

const fontFaceTemplate = (fileName: string) => {
  const [name] = fileName.split('.');
  const [fontName, fontType] = name.split('-');
  const weight = FONT_WEIGHTS[fontType.replace('Italic', '') || 'Regular'];
  const style = fontType.includes('Italic') ? 'italic' : 'normal';
  return `@font-face {
      font-family: '${fontName}';
      src: url('/fonts/${name}.woff2') format('woff2'),
        url('/fonts/${name}.woff') format('woff'),
        url('/fonts/${name}.ttf') format('truetype');
      font-weight: ${weight};
      font-style: ${style};
      font-display: swap;
    }`;
};

const generateFontFaces = (cb: () => void): void => {
  const fileNameList = fs.readdirSync(SRC.replace(/\/[^/]*?$/, ''));
  const fontFaceTemplateList = fileNameList.map(fontFaceTemplate);
  fs.writeFileSync(FILE, fileTemplate(fontFaceTemplateList));
  return cb();
};

export default parallel(generateWoff, generateFontFaces);

export const isAlreadyDone = (): boolean => fs.existsSync(DEST);
