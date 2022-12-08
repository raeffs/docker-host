import { ExecutorContext } from '@nrwl/devkit';
import { ExecutorResult, runDockerCompose } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { DownExecutorSchema } from './schema';

export default function runExecutor(
  schema: DownExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);
  return runDockerCompose(context, {
    pathToComposeFile: options.pathToComposeFile,
    additionalArgs: ['down', '--remove-orphans'],
  });
}
