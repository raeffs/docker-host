import { ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'child_process';
import { ExecutorResult } from './executor-result';
import { waitForExit } from './wait-for-exit';

export interface DockerComposeOptions {
  readonly pathToComposeFile: string;
  readonly additionalArgs?: string[];
}

export async function* runDockerCompose(
  context: ExecutorContext,
  options: DockerComposeOptions
): AsyncGenerator<ExecutorResult> {
  const args = ['compose', '--ansi', 'always', '--file', options.pathToComposeFile, ...(options.additionalArgs ?? [])];
  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  const processExitListener = (): void => {
    docker.kill();
  };
  process.on('exit', processExitListener);
  process.on('SIGTERM', processExitListener);

  yield {
    success: true,
  };

  return await waitForExit(docker);
}
