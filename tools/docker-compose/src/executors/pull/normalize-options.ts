import { ExecutorContext, joinPathFragments } from '@nx/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { PullExecutorOptions } from './options';
import { PullExecutorSchema } from './schema';

export function normalizeOptions(schema: PullExecutorSchema, context: ExecutorContext): PullExecutorOptions {
  const config = readCachedProjectConfiguration(context.projectName);

  return {
    ...schema,
    pathToComposeFile: joinPathFragments(config.root, schema.composeFile),
  };
}
