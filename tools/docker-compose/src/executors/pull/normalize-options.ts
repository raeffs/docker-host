import { ExecutorContext } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { getComposeFiles, getProjectName } from '../../utils';
import { PullExecutorOptions } from './options';
import { PullExecutorSchema } from './schema';

export function normalizeOptions(schema: PullExecutorSchema, context: ExecutorContext): PullExecutorOptions {
  const config = readCachedProjectConfiguration(getProjectName(context));

  return {
    ...schema,
    pathToComposeFile: getComposeFiles(config.root),
  };
}
