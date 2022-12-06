import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { ExecutorResult, getEnvironment } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { restoreVolume } from './restore-volume';
import { RestoreExecutorSchema } from './schema';

export default async function* runExecutor(
  schema: RestoreExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);
  const environment = getEnvironment();

  for (const volume of options.volumes) {
    const volumeName = `${volume}-${environment.ENVIRONMENT_NAME}`;
    const sourceFilePath = joinPathFragments(options.sourcePath, `${volume}-${options.sourceEnvironment}.tar.bz2`);
    yield await restoreVolume(context, {
      volumeName,
      sourceFilePath,
      force: options.force,
    });
  }
}
