import { ExecutorContext } from '@nx/devkit';
import { ConfigureExecutorOptions } from './options';
import { ConfigureExecutorSchema } from './schema';

export function normalizeOptions(schema: ConfigureExecutorSchema, context: ExecutorContext): ConfigureExecutorOptions {
  return {
    ...schema,
  };
}
