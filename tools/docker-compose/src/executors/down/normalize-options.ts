import { ExecutorContext } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { getComposeFiles, getProjectName } from '../../utils';
import { DownExecutorOptions } from './options';
import { DownExecutorSchema } from './schema';

export function normalizeOptions(schema: DownExecutorSchema, context: ExecutorContext): DownExecutorOptions {
  const config = readCachedProjectConfiguration(getProjectName(context));

  return {
    ...schema,
    pathToComposeFile: getComposeFiles(config.root),
  };
}
