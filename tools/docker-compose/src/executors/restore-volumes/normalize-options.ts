import { ExecutorContext, readTargetOptions } from '@nx/devkit';
import { mapToVolumeDefinitions } from '../create-volumes/normalize-options';
import { CreateVolumesExecutorSchema } from '../create-volumes/schema';
import { RestoreExecutorOptions } from './options';
import { RestoreExecutorSchema } from './schema';

export function normalizeOptions(schema: RestoreExecutorSchema, context: ExecutorContext): RestoreExecutorOptions {
  const targetSchema: CreateVolumesExecutorSchema = readTargetOptions(
    { project: context.projectName, target: 'create-volumes' },
    context
  );

  return {
    ...schema,
    volumes: mapToVolumeDefinitions(targetSchema.volumes).map(volume => volume.name),
  };
}
