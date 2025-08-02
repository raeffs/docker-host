import { joinPathFragments } from '@nx/devkit';
import { getEnvironmentName } from './environment';
import { existsSync } from 'fs';

export function getComposeFiles(projectRoot: string): string[] {
  const composeFiles = [joinPathFragments(projectRoot, 'docker-compose.yml')];

  const environmentComposeFile = joinPathFragments(projectRoot, `docker-compose.${getEnvironmentName()}.yml`);

  if (existsSync(environmentComposeFile)) {
    composeFiles.push(environmentComposeFile);
  }

  return composeFiles;
}
