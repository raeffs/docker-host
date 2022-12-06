import { ExecutorContext } from '@nrwl/devkit';
import { ExecutorResult, getLocalDockerVolumes } from '../../utils';
import { createVolume } from './create-volume';
import { normalizeOptions } from './normalize-options';
import { CreateExecutorSchema } from './schema';

export default async function* runExecutor(
  schema: CreateExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  const existingVolumes = await getLocalDockerVolumes(context);

  for (const volume of options.volumes) {
    if (existingVolumes.includes(volume)) {
      continue;
    }

    yield await createVolume(context, {
      volumeName: volume,
    });
  }

  return {
    success: true,
  };
}
