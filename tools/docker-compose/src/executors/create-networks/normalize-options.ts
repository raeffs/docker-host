import { ExecutorContext, readTargetOptions } from '@nx/devkit';
import { CreateNetworksExecutorOptions } from './options';
import { CreateNetworksExecutorSchema } from './schema';
import { getWorkspaceDependencies } from '../../utils';

export function normalizeOptions(
  schema: CreateNetworksExecutorSchema,
  context: ExecutorContext
): CreateNetworksExecutorOptions {
  let options: CreateNetworksExecutorOptions = {
    ...schema,
    networks: schema.networks ?? [],
  };

  const dependencies = getWorkspaceDependencies(context.projectName, context.projectGraph);
  for (const dependency of dependencies) {
    const targetSchema: CreateNetworksExecutorSchema = readTargetOptions(
      { project: dependency, target: 'create-networks' },
      context
    );
    options = {
      ...options,
      networks: [...(targetSchema.networks ?? []), ...options.networks],
    };
  }

  return options;
}
