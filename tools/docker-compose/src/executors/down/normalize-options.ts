import { ExecutorContext } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { DownExecutorOptions } from './options';
import { DownExecutorSchema } from './schema';
import { getComposeFiles } from '../../utils';

export function normalizeOptions(schema: DownExecutorSchema, context: ExecutorContext): DownExecutorOptions {
  const config = readCachedProjectConfiguration(context.projectName);

  return {
    ...schema,
    pathToComposeFile: getComposeFiles(config.root),
  };
}
