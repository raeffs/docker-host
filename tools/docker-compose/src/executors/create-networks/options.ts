import { CreateNetworksExecutorSchema, NetworkDefinition } from './schema';

export interface CreateNetworksExecutorOptions extends CreateNetworksExecutorSchema {
  readonly networks: NetworkDefinition[];
}
