import { ExecutorContext, getDependentPackagesForProject, readTargetOptions } from '@nrwl/devkit';
import { CreateVolumesExecutorOptions } from './options';
import { CreateVolumesExecutorSchema, VolumeDefinition } from './schema';

export function normalizeOptions(
  schema: CreateVolumesExecutorSchema,
  context: ExecutorContext
): CreateVolumesExecutorOptions {
  let options: CreateVolumesExecutorOptions = {
    ...schema,
    volumes: mapToVolumeDefinitions(schema.volumes),
  };

  const dependencies = getDependentPackagesForProject(context.projectGraph, context.projectName).workspaceLibraries;
  for (const dependency of dependencies) {
    const targetSchema: CreateVolumesExecutorSchema = readTargetOptions(
      { project: dependency.name, target: 'create-volumes' },
      context
    );
    options = {
      ...options,
      volumes: [...mapToVolumeDefinitions(targetSchema.volumes), ...options.volumes],
    };
  }

  return options;
}

export function mapToVolumeDefinitions(volumes?: (string | VolumeDefinition)[]): VolumeDefinition[] {
  return (volumes ?? []).map(volume => (typeof volume === 'string' ? { name: volume } : volume));
}
