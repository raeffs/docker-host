import { ExecutorContext } from '@nrwl/devkit';
import { ExecutorResult, runDockerCompose } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { PullExecutorSchema } from './schema';

export default function runExecutor(
  schema: PullExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);
  return runDockerCompose(context, {
    pathToComposeFile: options.pathToComposeFile,
    additionalArgs: ['pull'],
  });
}
