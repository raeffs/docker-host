import { ExecutorContext, parseTargetString, readTargetOptions } from '@nrwl/devkit';
import { getEnvironment } from '../../utils';
import { mapToVolumeDefinitions } from '../create-volumes/normalize-options';
import { CreateExecutorSchema } from '../create-volumes/schema';
import { RestoreExecutorOptions } from './options';
import { RestoreExecutorSchema } from './schema';

export function normalizeOptions(schema: RestoreExecutorSchema, context: ExecutorContext): RestoreExecutorOptions {
  const environment = getEnvironment();
  const target = parseTargetString(schema.createTarget);
  const targetSchema: CreateExecutorSchema = readTargetOptions(target, context);

  return {
    ...schema,
    volumes: mapToVolumeDefinitions(targetSchema.volumes).map(volume => volume.name),
    sourceEnvironment: schema.sourceEnvironment ?? environment.ENVIRONMENT_NAME,
  };
}
