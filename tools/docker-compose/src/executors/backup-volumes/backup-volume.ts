import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult, waitForExit } from '../../utils';

export interface BackupVolumeOptions {
  readonly volumeName: string;
  readonly targetFilePath: string;
}

export async function backupVolume(context: ExecutorContext, options: BackupVolumeOptions): Promise<ExecutorResult> {
  const args = [
    'run',
    '-v',
    `${options.volumeName}:/volume`,
    '--rm',
    '--log-driver',
    'none',
    'loomchild/volume-backup',
    'backup',
    '>',
    options.targetFilePath,
  ];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
    shell: true,
  });
  return await waitForExit(docker);
}
