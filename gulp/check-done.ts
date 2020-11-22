import { isAlreadyDone as isImagesDone } from './images';
import { isAlreadyDone as isFontsDone } from './fonts';
import { isAlreadyDone as isFaviconDone } from './favicon';
import { execSync } from 'child_process';

if (!isImagesDone() || !isFontsDone() || !isFaviconDone()) {
  execSync('gulp build', { stdio: 'inherit' });
}
