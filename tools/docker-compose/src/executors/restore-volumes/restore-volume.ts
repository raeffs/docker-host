import { ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';

export interface RestoreVolumeOptions {
  readonly volumeName: string;
  readonly sourceFilePath: string;
  readonly force: boolean;
}

export async function restoreVolume(context: ExecutorContext, options: RestoreVolumeOptions): Promise<ExecutorResult> {
  const args = [
    'run',
    '-i',
    '-v',
    `${options.volumeName}:/volume`,
    '--rm',
    'loomchild/volume-backup',
    'restore',
    ...(options.force ? ['-f'] : []),
    '<',
    options.sourceFilePath,
  ];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
    shell: true,
  });
  return await waitForExit(docker);
}
