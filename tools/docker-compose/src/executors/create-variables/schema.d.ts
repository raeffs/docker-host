export interface CreateVariablesExecutorSchema {
  readonly variables?: VariableDefinition[];
}

export interface VariableDefinition {
  readonly name: string;
  readonly description: string;
  readonly optional?: boolean;
  readonly defaultValue?: string;
  readonly type?: 'password' | 'generated' | 'boolean';
  readonly isSecret?: boolean;
}
