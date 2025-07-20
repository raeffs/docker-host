import { ExecutorContext, readTargetOptions } from '@nx/devkit';
import { CreateVariablesExecutorOptions } from './options';
import { CreateVariablesExecutorSchema } from './schema';
import { getWorkspaceDependencies } from '../../utils';

export function normalizeOptions(
  schema: CreateVariablesExecutorSchema,
  context: ExecutorContext
): CreateVariablesExecutorOptions {
  let options: CreateVariablesExecutorOptions = {
    ...schema,
    variables: schema.variables ?? [],
  };

  const dependencies = getWorkspaceDependencies(context.projectName, context.projectGraph);
  for (const dependency of dependencies) {
    const targetSchema: CreateVariablesExecutorSchema = readTargetOptions(
      { project: dependency, target: 'create-variables' },
      context
    );
    options = {
      ...options,
      variables: [...(targetSchema.variables ?? []), ...options.variables],
    };
  }

  return options;
}
