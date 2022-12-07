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

  let allData = '';

  docker.stdout.on('data', data => {
    allData = allData + data.toString();
  });

  await waitForExit(docker);

  for (const match of allData.matchAll(/^local\W*(?<volume>\S*)$/gim)) {
    volumes.push(match.groups['volume']);
  }

  return volumes;
}
