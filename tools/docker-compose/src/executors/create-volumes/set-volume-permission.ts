import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';

export interface SetVolumePermissionOptions {
  readonly volumeName: string;
  readonly userId: number;
  readonly image?: string;
  readonly mountPath?: string;
}

export async function setVolumePermissions(
  context: ExecutorContext,
  options: SetVolumePermissionOptions
): Promise<ExecutorResult> {
  const mountPath = options.mountPath ?? '/volume';
  const args = [
    'run',
    '--rm',
    '-v',
    `${options.volumeName}:${mountPath}`,
    '--entrypoint',
    '/bin/sh',
    options.image ?? 'busybox',
    '-c',
    `chown -R ${options.userId}:${options.userId} ${mountPath}`,
  ];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  return await waitForExit(docker);
}
