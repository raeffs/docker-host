import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { DownExecutorOptions } from './options';
import { DownExecutorSchema } from './schema';

export function normalizeOptions(schema: DownExecutorSchema, context: ExecutorContext): DownExecutorOptions {
  const config = readCachedProjectConfiguration(context.projectName);

  return {
    ...schema,
    pathToComposeFile: joinPathFragments(config.root, schema.composeFile),
  };
}
