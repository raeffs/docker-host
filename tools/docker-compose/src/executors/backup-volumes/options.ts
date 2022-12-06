import { BackupExecutorSchema } from './schema';

export interface BackupExecutorOptions extends BackupExecutorSchema {
  readonly volumes: string[];
  readonly targetEnvironment: string;
}
