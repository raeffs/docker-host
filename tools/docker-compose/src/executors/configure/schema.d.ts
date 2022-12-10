export interface ConfigureExecutorSchema {
  readonly variables?: VariableDefinition[];
}

export interface VariableDefinition {
  readonly name: string;
  readonly description: string;
}
