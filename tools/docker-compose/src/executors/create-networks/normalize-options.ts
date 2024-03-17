import { ExecutorContext, readTargetOptions } from '@nx/devkit';
import { getDependentPackagesForProject } from '@nx/webpack';
import { CreateNetworksExecutorOptions } from './options';
import { CreateNetworksExecutorSchema } from './schema';

export function normalizeOptions(
  schema: CreateNetworksExecutorSchema,
  context: ExecutorContext
): CreateNetworksExecutorOptions {
  let options: CreateNetworksExecutorOptions = {
    ...schema,
    networks: schema.networks ?? [],
  };

  const dependencies = getDependentPackagesForProject(context.projectGraph, context.projectName).workspaceLibraries;
  for (const dependency of dependencies) {
    const targetSchema: CreateNetworksExecutorSchema = readTargetOptions(
      { project: dependency.name, target: 'create-networks' },
      context
    );
    options = {
      ...options,
      networks: [...(targetSchema.networks ?? []), ...options.networks],
    };
  }

  return options;
}
