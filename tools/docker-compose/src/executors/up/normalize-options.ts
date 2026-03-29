import { ExecutorContext } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { getComposeFiles, getProjectName } from '../../utils';
import { UpExecutorOptions } from './options';
import { UpExecutorSchema } from './schema';

export function normalizeOptions(schema: UpExecutorSchema, context: ExecutorContext): UpExecutorOptions {
  const config = readCachedProjectConfiguration(getProjectName(context));

  return {
    ...schema,
    pathToComposeFile: getComposeFiles(config.root),
  };
}
