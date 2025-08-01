import { ExecutorContext } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { PullExecutorOptions } from './options';
import { PullExecutorSchema } from './schema';
import { getComposeFiles } from '../../utils';

export function normalizeOptions(schema: PullExecutorSchema, context: ExecutorContext): PullExecutorOptions {
  const config = readCachedProjectConfiguration(context.projectName);

  return {
    ...schema,
    pathToComposeFile: getComposeFiles(config.root),
  };
}
