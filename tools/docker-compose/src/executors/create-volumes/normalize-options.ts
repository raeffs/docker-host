import { ExecutorContext } from '@nrwl/devkit';
import { getEnvironment } from '../../utils';
import { CreateExecutorOptions } from './options';
import { CreateExecutorSchema } from './schema';

export function normalizeOptions(schema: CreateExecutorSchema, context: ExecutorContext): CreateExecutorOptions {
  const environment = getEnvironment();

  return {
    volumes: (schema.volumes ?? []).map(volume => `${volume}-${environment.ENVIRONMENT_NAME}`),
  };
}
