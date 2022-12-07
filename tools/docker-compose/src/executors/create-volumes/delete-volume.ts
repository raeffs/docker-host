import { ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';

export interface DeleteVolumeOptions {
  readonly volumeName: string;
}

export async function deleteVolume(context: ExecutorContext, options: DeleteVolumeOptions): Promise<ExecutorResult> {
  const args = ['volume', 'rm', options.volumeName];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  return await waitForExit(docker);
}
