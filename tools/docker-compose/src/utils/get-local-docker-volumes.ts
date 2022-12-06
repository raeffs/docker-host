import { ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'child_process';
import { waitForExit } from './wait-for-exit';

export async function getLocalDockerVolumes(context: ExecutorContext): Promise<string[]> {
  const volumes: string[] = [];

  const args = ['volume', 'ls'];
  const docker = spawn('docker', args, {
    stdio: 'pipe',
    cwd: context.root,
  });

  docker.stdout.on('data', data => {
    const content = data.toString();
    for (const match of content.matchAll(/^local\W*(?<volume>\S*)$/gim)) {
      volumes.push(match.groups['volume']);
    }
  });

  await waitForExit(docker);

  return volumes;
}
