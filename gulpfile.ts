import { parallel } from 'gulp';
import { default as images } from './gulp/images';
import { default as fonts } from './gulp/fonts';
import { default as favicon } from './gulp/favicon';

export const build = parallel(images, fonts, favicon);
export { images, fonts, favicon };
export { default as deploy } from './gulp/deploy';
