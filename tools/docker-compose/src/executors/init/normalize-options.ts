import { ExecutorContext } from '@nrwl/devkit';
import { InitExecutorOptions } from './options';
import { InitExecutorSchema } from './schema';

export function normalizeOptions(schema: InitExecutorSchema, context: ExecutorContext): InitExecutorOptions {
  return {
    ...schema,
  };
}
