export interface UpExecutorSchema {
  readonly detach: boolean;
  readonly force: boolean;
  readonly wait: boolean;
  readonly waitTimeout: number;
}
