import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';

export interface CreateVolumeOptions {
  readonly volumeName: string;
}

export async function createVolume(context: ExecutorContext, options: CreateVolumeOptions): Promise<ExecutorResult> {
  const args = ['volume', 'create', options.volumeName];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  return await waitForExit(docker);
}
