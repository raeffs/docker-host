import { joinPathFragments } from '@nx/devkit';
import { isCiEnvironment } from './environment';
import { existsSync } from 'fs';

export function getComposeFiles(projectRoot: string): string[] {
  const composeFiles = [joinPathFragments(projectRoot, 'docker-compose.yml')];

  const environmentComposeFile = joinPathFragments(
    projectRoot,
    isCiEnvironment() ? 'docker-compose.ci.yml' : 'docker-compose.local.yml'
  );

  if (existsSync(environmentComposeFile)) {
    composeFiles.push(environmentComposeFile);
  }

  return composeFiles;
}
