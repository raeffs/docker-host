import { ExecutorContext, parseTargetString, readTargetOptions } from '@nrwl/devkit';
import { mapToVolumeDefinitions } from '../create-volumes/normalize-options';
import { CreateExecutorSchema } from '../create-volumes/schema';
import { BackupExecutorOptions } from './options';
import { BackupExecutorSchema } from './schema';

export function normalizeOptions(schema: BackupExecutorSchema, context: ExecutorContext): BackupExecutorOptions {
  const target = parseTargetString(schema.createTarget);
  const targetSchema: CreateExecutorSchema = readTargetOptions(target, context);

  return {
    ...schema,
    volumes: mapToVolumeDefinitions(targetSchema.volumes).map(volume => volume.name),
  };
}
