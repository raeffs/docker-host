import { CreateExecutorSchema } from './schema';

export interface CreateExecutorOptions extends CreateExecutorSchema {
  readonly volumes: string[];
}
