import { ExecutorContext } from '@nrwl/devkit';
import { ExecutorResult, runDockerCompose } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { UpExecutorSchema } from './schema';

export default function runExecutor(
  schema: UpExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);
  return runDockerCompose(context, {
    pathToComposeFile: options.pathToComposeFile,
    additionalArgs: [
      'up',
      '--remove-orphans',
      ...(options.detach ? ['--detach'] : []),
      ...(options.force ? ['--force-recreate'] : []),
    ],
  });
}
