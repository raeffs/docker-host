import { ExecutorContext, getDependentPackagesForProject, readTargetOptions } from '@nrwl/devkit';
import { ConfigureExecutorOptions } from './options';
import { ConfigureExecutorSchema } from './schema';

export function normalizeOptions(schema: ConfigureExecutorSchema, context: ExecutorContext): ConfigureExecutorOptions {
  let options: ConfigureExecutorOptions = {
    ...schema,
    variables: schema.variables ?? [],
  };

  const dependencies = getDependentPackagesForProject(context.projectGraph, context.projectName).workspaceLibraries;
  for (const dependency of dependencies) {
    const targetSchema: ConfigureExecutorSchema = readTargetOptions(
      { project: dependency.name, target: 'configure' },
      context
    );
    options = {
      ...options,
      variables: [...(targetSchema.variables ?? []), ...options.variables],
    };
  }

  return options;
}
