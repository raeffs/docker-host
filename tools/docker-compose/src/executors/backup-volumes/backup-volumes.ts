import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { ExecutorResult } from '../../utils';
import { backupVolume } from './backup-volume';
import { normalizeOptions } from './normalize-options';
import { BackupExecutorSchema } from './schema';

export default async function* runExecutor(
  schema: BackupExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  for (const volume of options.volumes) {
    const targetFilePath = joinPathFragments(options.targetPath, `${volume}.tar.bz2`);
    yield await backupVolume(context, {
      volumeName: volume,
      targetFilePath,
    });
  }
}
