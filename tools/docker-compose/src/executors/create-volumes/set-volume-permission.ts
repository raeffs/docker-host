import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';

export interface SetVolumePermissionOptions {
  readonly volumeName: string;
  readonly userId: number;
}

export async function setVolumePermissions(
  context: ExecutorContext,
  options: SetVolumePermissionOptions
): Promise<ExecutorResult> {
  const args = [
    'run',
    '--rm',
    '-v',
    `${options.volumeName}:/volume`,
    'busybox',
    '/bin/sh',
    '-c',
    `chown -R ${options.userId}:${options.userId} /volume`,
  ];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  return await waitForExit(docker);
}
