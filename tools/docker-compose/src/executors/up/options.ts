import { DockerComposeOptions } from '../../utils';
import { UpExecutorSchema } from './schema';

export interface UpExecutorOptions extends UpExecutorSchema, DockerComposeOptions {}
