import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';
import { NetworkDefinition } from './schema';

export async function createNetwork(context: ExecutorContext, network: NetworkDefinition): Promise<ExecutorResult> {
  const args = ['network', 'create', '--subnet', network.subnet, '--ip-range', network.ipRange, network.name];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  return await waitForExit(docker);
}
