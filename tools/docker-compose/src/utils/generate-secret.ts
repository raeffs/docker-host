import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { waitForExit } from './wait-for-exit';

export async function generateSecret(context: ExecutorContext): Promise<string> {
  const args = ['rand', '-base64', '51'];
  const openssl = spawn('openssl', args, {
    stdio: 'pipe',
    cwd: context.root,
  });

  let allData = '';

  openssl.stdout.on('data', data => {
    allData = allData + data.toString();
  });

  await waitForExit(openssl);

  return allData.trim().replaceAll(/\s/g, '');
}
