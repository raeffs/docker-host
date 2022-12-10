import { ExecutorContext, runExecutor as runExternalExecutor } from '@nrwl/devkit';
import { ExecutorResult } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { InitExecutorSchema } from './schema';

export default async function runExecutor(
  schema: InitExecutorSchema,
  context: ExecutorContext
): Promise<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  const configureResults = await runExternalExecutor(
    { project: context.projectName, target: 'configure' },
    {},
    context
  );
  for await (const result of configureResults) {
    if (!result.success) return result;
  }

  const createResults = await runExternalExecutor(
    { project: context.projectName, target: 'create-volumes' },
    {},
    context
  );
  for await (const result of createResults) {
    if (!result.success) return result;
  }

  return { success: true };
}
