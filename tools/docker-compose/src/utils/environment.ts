import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { appendFile } from 'fs/promises';

export function getEnvironment(): Record<string, string> {
  return {
    ...process.env,
  };
}

export function isEnvironmentVariableSet(name: string): boolean {
  return Object.keys(getEnvironment()).includes(name);
}

export async function setEnvironmentVariable(context: ExecutorContext, name: string, value: string): Promise<void> {
  await appendFile(joinPathFragments(context.root, '.env.local'), `${name}='${value}'\n`, { encoding: 'utf-8' });
}
