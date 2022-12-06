import { DockerComposeOptions } from '../../utils';
import { PullExecutorSchema } from './schema';

export interface PullExecutorOptions extends PullExecutorSchema, DockerComposeOptions {}
