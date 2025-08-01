import { ExecutorContext } from '@nx/devkit';
import { spawn } from 'child_process';
import { ExecutorResult } from './executor-result';
import { waitForExit } from './wait-for-exit';
import { isCiEnvironment } from './environment';

export interface DockerComposeOptions {
  readonly pathToComposeFile: string | string[];
  readonly additionalArgs?: string[];
}

export async function* runDockerCompose(
  context: ExecutorContext,
  options: DockerComposeOptions
): AsyncGenerator<ExecutorResult> {
  const args = ['compose'];

  if (isCiEnvironment()) {
    args.push('--ansi', 'never');
    args.push('--progress', 'plain');
  }

  const composeFiles = Array.isArray(options.pathToComposeFile)
    ? options.pathToComposeFile
    : [options.pathToComposeFile];
  const composeFileArgs = composeFiles.flatMap(composeFile => ['--file', composeFile]);
  args.push(...composeFileArgs, ...(options.additionalArgs ?? []));

  const docker = spawn('docker', args, {
    stdio: 'inherit',
    cwd: context.root,
  });

  yield {
    success: true,
  };

  return await waitForExit(docker);
}
