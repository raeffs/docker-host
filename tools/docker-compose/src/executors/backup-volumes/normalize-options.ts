import { ExecutorContext, parseTargetString, readTargetOptions } from '@nrwl/devkit';
import { getEnvironment } from '../../utils';
import { CreateExecutorSchema } from '../create-volumes/schema';
import { BackupExecutorOptions } from './options';
import { BackupExecutorSchema } from './schema';

export function normalizeOptions(schema: BackupExecutorSchema, context: ExecutorContext): BackupExecutorOptions {
  const environment = getEnvironment();
  const target = parseTargetString(schema.createTarget);
  const targetSchema: CreateExecutorSchema = readTargetOptions(target, context);

  return {
    ...schema,
    volumes: targetSchema.volumes ?? [],
    targetEnvironment: schema.targetEnvironment ?? environment.ENVIRONMENT_NAME,
  };
}
