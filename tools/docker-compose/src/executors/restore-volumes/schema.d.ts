export interface RestoreExecutorSchema {
  readonly createTarget: string;
  readonly sourcePath: string;
  readonly sourceEnvironment?: string;
  readonly force: boolean;
}
