import { ExecutorContext, readTargetOptions } from '@nx/devkit';
import { getProjectName, getWorkspaceDependencies } from '../../utils';
import { CreateVariablesExecutorOptions } from './options';
import { CreateVariablesExecutorSchema } from './schema';

export function normalizeOptions(
  schema: CreateVariablesExecutorSchema,
  context: ExecutorContext
): CreateVariablesExecutorOptions {
  let options: CreateVariablesExecutorOptions = {
    ...schema,
    variables: schema.variables ?? [],
  };

  const dependencies = getWorkspaceDependencies(getProjectName(context), context.projectGraph);
  for (const dependency of dependencies) {
    if (context.projectsConfigurations.projects[dependency]?.targets?.['create-variables']) {
      const targetSchema: CreateVariablesExecutorSchema = readTargetOptions(
        { project: dependency, target: 'create-variables' },
        context
      );
      options = {
        ...options,
        variables: [...(targetSchema.variables ?? []), ...options.variables],
      };
    }
  }

  return options;
}
