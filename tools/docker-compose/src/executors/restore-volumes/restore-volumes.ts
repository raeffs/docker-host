import { ExecutorContext, joinPathFragments } from '@nx/devkit';
import { ExecutorResult } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { restoreVolume } from './restore-volume';
import { RestoreExecutorSchema } from './schema';

export default async function* runExecutor(
  schema: RestoreExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  for (const volume of options.volumes) {
    const sourceFilePath = joinPathFragments(options.sourcePath, `${volume}.tar.bz2`);
    yield await restoreVolume(context, {
      volumeName: volume,
      sourceFilePath,
      force: options.force,
    });
  }
}
