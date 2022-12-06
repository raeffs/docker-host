import { ApplicationGeneratorSchema } from './schema';

export interface ApplicationGeneratorOptions extends ApplicationGeneratorSchema {
  readonly applicationName: string;
  readonly applicationRoot: string;
}
