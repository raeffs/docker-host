export interface CreateVariablesExecutorSchema {
  readonly useDefaults: boolean;
  readonly variables?: VariableDefinition[];
}

export interface VariableDefinition {
  readonly name: string;
  readonly description: string;
  readonly optional?: boolean;
  readonly defaultValue?: string;
  readonly type?: 'password' | 'generated' | 'boolean' | 'docker-group' | 'hostname';
  readonly isSecret?: boolean;
}
