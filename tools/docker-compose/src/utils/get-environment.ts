export interface Environment {
  readonly ENVIRONMENT_NAME: string;
}

export function getEnvironment(): Environment {
  return {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME ?? 'development',
  };
}
