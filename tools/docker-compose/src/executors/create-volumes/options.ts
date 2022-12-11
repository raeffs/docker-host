import { CreateVolumesExecutorSchema, VolumeDefinition } from './schema';

export interface CreateVolumesExecutorOptions extends CreateVolumesExecutorSchema {
  readonly volumes: VolumeDefinition[];
}
