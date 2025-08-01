import { ExecutorContext, readTargetOptions } from '@nx/devkit';
import { CreateVolumesExecutorOptions } from './options';
import { CreateVolumesExecutorSchema, VolumeDefinition } from './schema';
import { getWorkspaceDependencies } from '../../utils';

export function normalizeOptions(
  schema: CreateVolumesExecutorSchema,
  context: ExecutorContext
): CreateVolumesExecutorOptions {
  let options: CreateVolumesExecutorOptions = {
    ...schema,
    volumes: mapToVolumeDefinitions(schema.volumes),
  };

  const dependencies = getWorkspaceDependencies(context.projectName, context.projectGraph);
  for (const dependency of dependencies) {
    if (context.projectsConfigurations.projects[dependency].targets['create-volumes']) {
      const targetSchema: CreateVolumesExecutorSchema = readTargetOptions(
        { project: dependency, target: 'create-volumes' },
        context
      );
      options = {
        ...options,
        volumes: [...mapToVolumeDefinitions(targetSchema.volumes), ...options.volumes],
      };
    }
  }

  return options;
}

export function mapToVolumeDefinitions(volumes?: (string | VolumeDefinition)[]): VolumeDefinition[] {
  return (volumes ?? []).map(volume => (typeof volume === 'string' ? { name: volume } : volume));
}
