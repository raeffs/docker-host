import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import { appendFile } from 'fs/promises';

let env = {
  ...process.env,
};

export function getEnvironment(): Record<string, string> {
  return {
    ...env,
  };
}

export function isEnvironmentVariableSet(name: string): boolean {
  return Object.keys(env).includes(name);
}

export async function setEnvironmentVariable(context: ExecutorContext, name: string, value: string): Promise<void> {
  await appendFile(joinPathFragments(context.root, '.env.local'), `${name}='${value}'\n`, { encoding: 'utf-8' });
  env = {
    ...env,
    [name]: value,
  };
}

export function expandEnvironmentVariables(value?: string): string {
  return (value ?? '').replaceAll(/\$\{(?<name>\w+)\}/g, (match, group) => env[group]);
}
