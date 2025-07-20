import { ExecutorContext } from '@nx/devkit';
import { ConfigureExecutorOptions } from './options';
import { ConfigureExecutorSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function normalizeOptions(schema: ConfigureExecutorSchema, context: ExecutorContext): ConfigureExecutorOptions {
  return {
    ...schema,
  };
}
