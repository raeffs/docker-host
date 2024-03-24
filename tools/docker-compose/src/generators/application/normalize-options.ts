import { names } from '@nx/devkit';
import { ApplicationGeneratorOptions } from './options';
import { ApplicationGeneratorSchema } from './schema';

export function normalizeOptions(schema: ApplicationGeneratorSchema): ApplicationGeneratorOptions {
  const applicationName = names(schema.name).fileName;

  return {
    ...schema,
    applicationName,
    applicationRoot: `apps/${applicationName}`,
  };
}
