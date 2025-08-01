import {
  CreateNodesContextV2,
  createNodesFromFiles,
  CreateNodesResult,
  CreateNodesV2,
  logger,
  TargetConfiguration,
} from '@nx/devkit';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

export const createNodesV2: CreateNodesV2 = [
  '**/docker-compose.yml',
  (projectConfigurationFiles: string[], options: undefined, context: CreateNodesContextV2) => {
    return createNodesFromFiles(
      configFile => createNodesInternal(configFile),
      projectConfigurationFiles,
      options,
      context
    );
  },
];

function createNodesInternal(configFilePath: string): CreateNodesResult {
  const projectRoot = dirname(configFilePath);

  const projectJsonPath = join(projectRoot, 'project.json');
  if (!existsSync(projectJsonPath)) {
    return {};
  }

  const targets: Record<string, TargetConfiguration> = {};

  targets['up'] = {
    ...getTargetDefaults('up'),
    dependsOn: ['^up'],
  };

  targets['down'] = getTargetDefaults('down');

  targets['pull'] = getTargetDefaults('pull');

  targets['configure'] = getTargetDefaults('configure');

  targets['create-networks'] = getTargetDefaults('create-networks');

  targets['create-variables'] = getTargetDefaults('create-variables');

  targets['create-volumes'] = getTargetDefaults('create-volumes');

  targets['backup-volumes'] = getTargetDefaults('backup-volumes');

  targets['restore-volumes'] = getTargetDefaults('restore-volumes');

  return {
    projects: {
      [projectRoot]: {
        targets: targets,
      },
    },
  };
}

function getTargetDefaults(executorName: string): TargetConfiguration {
  return {
    executor: `@raeffs/docker-compose:${executorName}`,
    cache: false,
    outputs: [],
    parallelism: false,
  };
}
