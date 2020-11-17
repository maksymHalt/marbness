import { series } from 'gulp';
import GulpSSH from 'gulp-ssh';
import { execSync } from 'child_process';
import sshConfig from './config/sshConfig.json';

const { host, username, password, dest } = sshConfig;

const SRC = 'out/';
const DEST = dest;

const gulpSSH = new GulpSSH({ sshConfig });

const cleanUpFiles = (): NodeJS.ReadWriteStream => gulpSSH.shell([`rm -rf ${DEST}`]);

const deployFiles = (cb: () => void): void => {
  execSync(`sshpass -p ${password} rsync -az ${SRC} ${username}@${host}:${DEST}`);
  return cb();
};

export default series(cleanUpFiles, deployFiles);
