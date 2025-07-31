import { ExecutorContext, logger } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult } from './executor-result';
import { waitForExit } from './wait-for-exit';
import { isEnvironmentVariableSet } from './environment';

export interface DockerComposeOptions {
  readonly pathToComposeFile: string;
  readonly additionalArgs?: string[];
}

export async function* runDockerCompose(
  context: ExecutorContext,
  options: DockerComposeOptions
): AsyncGenerator<ExecutorResult> {
  const args = ['compose'];

  const isCi = isEnvironmentVariableSet('CI');

  if (isCi) {
    args.push('--ansi', 'never');
    args.push('--progress', 'plain');
  }

  args.push('--file', options.pathToComposeFile, ...(options.additionalArgs ?? []));

  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  yield {
    success: true,
  };

  return await waitForExit(docker);
}
