import { ChildProcess } from 'child_process';
import { ExecutorResult } from './executor-result';

export function waitForExit(childProcess: ChildProcess): Promise<ExecutorResult> {
  const processExitListener = (): void => {
    childProcess.kill();
  };

  process.on('exit', processExitListener);
  process.on('SIGTERM', processExitListener);

  return new Promise<ExecutorResult>(resolve => {
    childProcess.on('exit', code => {
      process.off('exit', processExitListener);
      process.off('SIGTERM', processExitListener);

      resolve({
        success: code == 0,
      });
    });
  });
}
