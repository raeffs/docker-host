import { logger } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export async function getDockerGroupId(): Promise<string> {
  try {
    const command = 'getent group docker | cut -d: -f3';
    const { stdout } = await promisify(exec)(command);

    const gid = stdout.trim();

    return gid;
  } catch (error) {
    logger.debug(`Could not get the Docker GID: ${error.message}`);
    return null;
  }
}
