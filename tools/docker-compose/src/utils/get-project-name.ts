import { ExecutorContext } from '@nx/devkit';

export function getProjectName(context: ExecutorContext): string {
  if (!context.projectName) {
    throw new Error('projectName is required');
  }
  return context.projectName;
}
