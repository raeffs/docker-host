import { generateFiles, joinPathFragments, names, Tree } from '@nx/devkit';
import { normalizeOptions } from './normalize-options';
import { ApplicationGeneratorSchema } from './schema';

export default async function runGenerator(host: Tree, schema: ApplicationGeneratorSchema): Promise<void> {
  const options = normalizeOptions(schema);
  generateFiles(host, joinPathFragments(__dirname, 'files'), options.applicationRoot, {
    applicationName: options.applicationName,
    names
  });
}
