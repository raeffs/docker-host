import { ExecutorContext, joinPathFragments } from '@nx/devkit';
import { appendFile } from 'fs/promises';

const EnvironmentNameVariable = 'ENVIRONMENT_NAME';
const DefaultEnvironmentName = 'local';
const CiEnvironmentName = 'ci';

let env = {
  ...process.env,
};

/**
 * Returns all known environment variables.
 */
export function getEnvironment(): Record<string, string> {
  return {
    ...env,
  };
}

/**
 * Returns true if an environment variable is set.
 */
export function isEnvironmentVariableSet(name: string): boolean {
  return Object.keys(env).includes(name);
}

/**
 * Sets an enviornment variable by writing it to `.env.local` which will be picked up by Node.
 * Also stores the variable in memory making it immediately available to the current process.
 */
export async function setEnvironmentVariable(context: ExecutorContext, name: string, value: string): Promise<void> {
  await appendFile(joinPathFragments(context.root, '.env.local'), `${name}='${value}'\n`, { encoding: 'utf-8' });
  env = {
    ...env,
    [name]: value,
  };
}

/**
 * Replaces all environment variables found in the provided string, looking for the pattern `${VariableName}`.
 */
export function expandEnvironmentVariables(value?: string): string {
  return (value ?? '').replaceAll(/\$\{(?<name>\w+)\}/g, (match, group) => env[group]);
}

/**
 * Returns true when running in a continuous integration environment, which is determined by the presence of a CI environment variable.
 */
export function isCiEnvironment(): boolean {
  return isEnvironmentVariableSet('CI');
}

/**
 * Returns the name of the current environment.
 */
export function getEnvironmentName(): string {
  return isCiEnvironment() ? CiEnvironmentName : (getEnvironment()[EnvironmentNameVariable] ?? DefaultEnvironmentName);
}
