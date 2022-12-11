import { ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'child_process';
import { waitForExit } from './wait-for-exit';

export async function getLocalDockerNetworks(context: ExecutorContext): Promise<string[]> {
  const networks: string[] = [];

  const args = ['network', 'ls'];
  const docker = spawn('docker', args, {
    stdio: 'pipe',
    cwd: context.root,
  });

  let allData = '';

  docker.stdout.on('data', data => {
    allData = allData + data.toString();
  });

  await waitForExit(docker);

  for (const match of allData.matchAll(/^\S+\s+(?<network>\S+)\s+\S+\s+local$/gim)) {
    networks.push(match.groups['network']);
  }

  return networks;
}
