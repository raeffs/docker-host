import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { ExecutorResult, getEnvironment } from '../../utils';
import { backupVolume } from './backup-volume';
import { normalizeOptions } from './normalize-options';
import { BackupExecutorSchema } from './schema';

export default async function* runExecutor(
  schema: BackupExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);
  const environment = getEnvironment();

  for (const volume of options.volumes) {
    const volumeName = `${volume}-${environment.ENVIRONMENT_NAME}`;
    const targetFilePath = joinPathFragments(options.targetPath, `${volume}-${options.targetEnvironment}.tar.bz2`);
    yield await backupVolume(context, {
      volumeName,
      targetFilePath,
    });
  }
}
