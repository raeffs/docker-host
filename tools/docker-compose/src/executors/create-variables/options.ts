import { CreateVariablesExecutorSchema, VariableDefinition } from './schema';

export interface CreateVariablesExecutorOptions extends CreateVariablesExecutorSchema {
  readonly variables: VariableDefinition[];
}
