import { src, dest } from 'gulp';
import webp from 'gulp-webp';
import fs from 'fs';

const SRC = 'src/img/*.{jpg,png}';
const DEST = 'public/img';

const generateWebP = (): NodeJS.ReadWriteStream => {
  fs.existsSync(DEST) && fs.rmdirSync(DEST, { recursive: true });

  return src(SRC)
    .pipe(dest(DEST))
    .pipe(webp({ quality: 75 }))
    .pipe(dest(DEST));
};

export default generateWebP;

export const isAlreadyDone = (): boolean => fs.existsSync(DEST);
