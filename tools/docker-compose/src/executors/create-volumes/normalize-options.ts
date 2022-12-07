import { ExecutorContext } from '@nrwl/devkit';
import { getEnvironment } from '../../utils';
import { CreateExecutorOptions } from './options';
import { CreateExecutorSchema, VolumeDefinition } from './schema';

export function normalizeOptions(schema: CreateExecutorSchema, context: ExecutorContext): CreateExecutorOptions {
  return {
    ...schema,
    volumes: mapToVolumeDefinitions(schema.volumes),
  };
}

export function mapToVolumeDefinitions(volumes?: (string | VolumeDefinition)[]): VolumeDefinition[] {
  const environment = getEnvironment();
  return (volumes ?? [])
    .map(volume => (typeof volume === 'string' ? { name: volume } : volume))
    .map(volume => ({ ...volume, name: `${volume.name}-${environment.ENVIRONMENT_NAME}` }));
}
