import { ExecutorContext, joinPathFragments } from '@nx/devkit';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';

function getSecretPath(context: ExecutorContext, name: string): string {
  return joinPathFragments(context.root, '.secrets', name);
}

export function isSecretSet(context: ExecutorContext, name: string): boolean {
  return existsSync(getSecretPath(context, name));
}

export async function setSecret(context: ExecutorContext, name: string, value: string): Promise<void> {
  await writeFile(getSecretPath(context, name), value, { encoding: 'utf-8' });
}
