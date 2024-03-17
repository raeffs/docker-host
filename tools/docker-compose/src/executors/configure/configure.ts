import { ExecutorContext, runExecutor as runExternalExecutor } from '@nx/devkit';
import { ExecutorResult } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { ConfigureExecutorSchema } from './schema';

export default async function runExecutor(
  schema: ConfigureExecutorSchema,
  context: ExecutorContext
): Promise<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  const createVariablesResults = await runExternalExecutor(
    { project: context.projectName, target: 'create-variables' },
    {},
    context
  );
  for await (const result of createVariablesResults) {
    if (!result.success) return result;
  }

  const createVolumesResults = await runExternalExecutor(
    { project: context.projectName, target: 'create-volumes' },
    {},
    context
  );
  for await (const result of createVolumesResults) {
    if (!result.success) return result;
  }

  const createNetworksResults = await runExternalExecutor(
    { project: context.projectName, target: 'create-networks' },
    {},
    context
  );
  for await (const result of createNetworksResults) {
    if (!result.success) return result;
  }

  return { success: true };
}
