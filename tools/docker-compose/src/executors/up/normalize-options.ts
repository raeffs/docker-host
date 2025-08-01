import { ExecutorContext } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { UpExecutorOptions } from './options';
import { UpExecutorSchema } from './schema';
import { getComposeFiles } from '../../utils';

export function normalizeOptions(schema: UpExecutorSchema, context: ExecutorContext): UpExecutorOptions {
  const config = readCachedProjectConfiguration(context.projectName);

  return {
    ...schema,
    pathToComposeFile: getComposeFiles(config.root),
  };
}
