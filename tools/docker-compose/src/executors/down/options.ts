import { DockerComposeOptions } from '../../utils';
import { DownExecutorSchema } from './schema';

export interface DownExecutorOptions extends DownExecutorSchema, DockerComposeOptions {}
