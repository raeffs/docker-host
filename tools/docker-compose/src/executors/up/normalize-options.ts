import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { UpExecutorOptions } from './options';
import { UpExecutorSchema } from './schema';

export function normalizeOptions(schema: UpExecutorSchema, context: ExecutorContext): UpExecutorOptions {
  const config = readCachedProjectConfiguration(context.projectName);

  return {
    ...schema,
    pathToComposeFile: joinPathFragments(config.root, schema.composeFile),
  };
}
