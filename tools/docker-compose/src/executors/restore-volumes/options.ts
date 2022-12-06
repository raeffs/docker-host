import { RestoreExecutorSchema } from './schema';

export interface RestoreExecutorOptions extends RestoreExecutorSchema {
  readonly volumes: string[];
  readonly sourceEnvironment: string;
}
