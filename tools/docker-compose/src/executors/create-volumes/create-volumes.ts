import { ExecutorContext } from '@nrwl/devkit';
import { ExecutorResult, getLocalDockerVolumes } from '../../utils';
import { createVolume } from './create-volume';
import { deleteVolume } from './delete-volume';
import { normalizeOptions } from './normalize-options';
import { CreateVolumesExecutorSchema } from './schema';
import { setVolumePermissions } from './set-volume-permission';

export default async function* runExecutor(
  schema: CreateVolumesExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  const existingVolumes = await getLocalDockerVolumes(context);

  for (const volume of options.volumes) {
    const volumeExists = existingVolumes.includes(volume.name);

    if (volumeExists && !options.force) {
      continue;
    }

    if (volumeExists) {
      yield await deleteVolume(context, {
        volumeName: volume.name,
      });
    }

    yield await createVolume(context, {
      volumeName: volume.name,
    });

    if (volume.userId) {
      yield await setVolumePermissions(context, {
        volumeName: volume.name,
        userId: volume.userId,
      });
    }
  }

  return {
    success: true,
  };
}
