import { ExecutorContext } from '@nrwl/devkit';
import { ExecutorResult, getLocalDockerNetworks } from '../../utils';
import { createNetwork } from './create-network';
import { normalizeOptions } from './normalize-options';
import { CreateNetworksExecutorSchema } from './schema';

export default async function* runExecutor(
  schema: CreateNetworksExecutorSchema,
  context: ExecutorContext
): AsyncGenerator<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  const existingNetworks = await getLocalDockerNetworks(context);

  for (const network of options.networks) {
    const networkExists = existingNetworks.includes(network.name);

    if (networkExists) {
      continue;
    }

    yield await createNetwork(context, network);
  }

  return {
    success: true,
  };
}
