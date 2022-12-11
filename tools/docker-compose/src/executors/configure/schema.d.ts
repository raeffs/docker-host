export interface ConfigureExecutorSchema {
  readonly variables?: VariableDefinition[];
}

export type VariableDefinition = VariableDefinitionBase;

export interface VariableDefinitionBase {
  readonly name: string;
  readonly description: string;
  readonly optional?: boolean;
  readonly defaultValue?: string;
  readonly type?: 'password' | 'generated';
}
