import { ExecutorContext, readTargetOptions } from '@nrwl/devkit';
import { mapToVolumeDefinitions } from '../create-volumes/normalize-options';
import { CreateVolumesExecutorSchema } from '../create-volumes/schema';
import { BackupExecutorOptions } from './options';
import { BackupExecutorSchema } from './schema';

export function normalizeOptions(schema: BackupExecutorSchema, context: ExecutorContext): BackupExecutorOptions {
  const targetSchema: CreateVolumesExecutorSchema = readTargetOptions(
    { project: context.projectName, target: 'create-volumes' },
    context
  );

  return {
    ...schema,
    volumes: mapToVolumeDefinitions(targetSchema.volumes).map(volume => volume.name),
  };
}
