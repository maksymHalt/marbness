import { src, dest, series } from 'gulp';
import favicon from 'gulp-favicons';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

const SRC = 'src/favicon/favicon.png';
const DEST = 'public/favicon';
const FILE = 'src/favicon/index.tsx';

const faviconConfig = {
  appName: 'Marbness',
  appDescription: 'Digital agency',
  background: '#9f54e4',
  theme_color: '#9f54e4',
  path: 'favicon/',
  display: 'standalone',
  orientation: 'portrait',
  scope: '/',
  version: 1.0,
  logging: false,
  html: 'index.html',
  pipeHTML: true,
  replace: true,
  icons: {
    appleIcon: { background: '#000' },
    appleStartup: { background: '#000' },
    coast: false,
    firefox: false,
    yandex: false
  }
};

const template = (data: string) => `import React from 'react';

const faviconMeta = (
  <>
    ${data.replace(/>\n/g, ' />\n    ').replace(/>$/g, ' />')}
  </>
);

export default faviconMeta;
`;

const generateFavicons = (): NodeJS.ReadWriteStream => {
  fs.existsSync(DEST) && fs.rmdirSync(DEST, { recursive: true });

  return src(SRC).pipe(favicon(faviconConfig)).pipe(dest(DEST));
};

const copyMeta = async (cb: () => void): Promise<void> => {
  const htmlFilePath = path.resolve(DEST, 'index.html');
  const data = fs.readFileSync(htmlFilePath, { encoding: 'utf8' });

  const config = await prettier.resolveConfig('./.prettierrc');
  fs.writeFileSync(FILE, prettier.format(template(data), { ...config, parser: 'babel' }));
  fs.unlinkSync(htmlFilePath);
  return cb();
};

export default series(generateFavicons, copyMeta);

export const isAlreadyDone = (): boolean => fs.existsSync(DEST);
