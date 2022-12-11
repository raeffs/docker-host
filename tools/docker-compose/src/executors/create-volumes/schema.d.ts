export interface CreateVolumesExecutorSchema {
  readonly volumes?: (string | VolumeDefinition)[];
  readonly force: boolean;
}

export interface VolumeDefinition {
  readonly name: string;
  readonly userId?: number;
}
