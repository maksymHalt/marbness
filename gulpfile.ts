import { parallel } from 'gulp';
import { default as images, isAlreadyDone as isImagesDone } from './gulp/images';
import { default as fonts, isAlreadyDone as isFontsDone } from './gulp/fonts';

export const build = parallel(images, fonts);

export const initialBuild = (cb: () => void): void =>
  !isImagesDone() || !isFontsDone() ? build(cb) : cb();

export { images, fonts };
export { default as deploy } from './gulp/deploy';
