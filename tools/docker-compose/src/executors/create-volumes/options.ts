import { CreateExecutorSchema, VolumeDefinition } from './schema';

export interface CreateExecutorOptions extends CreateExecutorSchema {
  readonly volumes: VolumeDefinition[];
}
