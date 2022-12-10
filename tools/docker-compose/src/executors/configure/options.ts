import { ConfigureExecutorSchema, VariableDefinition } from './schema';

export interface ConfigureExecutorOptions extends ConfigureExecutorSchema {
  readonly variables: VariableDefinition[];
}
