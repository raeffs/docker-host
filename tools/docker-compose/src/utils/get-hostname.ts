import { logger } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export async function getHostname(): Promise<string> {
  try {
    const command = 'hostname';
    const { stdout } = await promisify(exec)(command);

    const hostname = stdout.trim();

    return hostname;
  } catch (error) {
    logger.debug(`Could not get the hostname: ${error.message}`);
    return null;
  }
}
