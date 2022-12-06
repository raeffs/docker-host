export interface BackupExecutorSchema {
  readonly createTarget: string;
  readonly targetPath: string;
  readonly targetEnvironment?: string;
}
