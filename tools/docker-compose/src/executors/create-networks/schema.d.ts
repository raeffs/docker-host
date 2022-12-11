export interface CreateNetworksExecutorSchema {
  readonly networks?: NetworkDefinition[];
}

export interface NetworkDefinition {
  readonly name: string;
  readonly subnet: string;
  readonly ipRange: string;
}
