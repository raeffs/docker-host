import { ExecutorContext } from '@nrwl/devkit';
import { CreateExecutorOptions } from './options';
import { CreateExecutorSchema, VolumeDefinition } from './schema';

export function normalizeOptions(schema: CreateExecutorSchema, context: ExecutorContext): CreateExecutorOptions {
  return {
    ...schema,
    volumes: mapToVolumeDefinitions(schema.volumes),
  };
}

export function mapToVolumeDefinitions(volumes?: (string | VolumeDefinition)[]): VolumeDefinition[] {
  return (volumes ?? []).map(volume => (typeof volume === 'string' ? { name: volume } : volume));
}
