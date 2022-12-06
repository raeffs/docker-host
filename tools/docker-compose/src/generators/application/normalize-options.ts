import { stringUtils } from '@nrwl/workspace';
import { ApplicationGeneratorOptions } from './options';
import { ApplicationGeneratorSchema } from './schema';

export function normalizeOptions(schema: ApplicationGeneratorSchema): ApplicationGeneratorOptions {
  const applicationName = stringUtils.dasherize(schema.name);

  return {
    ...schema,
    applicationName,
    applicationRoot: `apps/${applicationName}`,
  };
}
