import { ExecutorContext, , readTargetOptions } from '@nx/devkit';
import { getDependentPackagesForProject } from '@nx/webpack';
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

  const dependencies = getDependentPackagesForProject(context.projectGraph, context.projectName).workspaceLibraries;
  for (const dependency of dependencies) {
    const targetSchema: CreateVariablesExecutorSchema = readTargetOptions(
      { project: dependency.name, target: 'create-variables' },
      context
    );
    options = {
      ...options,
      variables: [...(targetSchema.variables ?? []), ...options.variables],
    };
  }

  return options;
}
