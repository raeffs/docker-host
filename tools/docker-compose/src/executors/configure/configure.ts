import { ExecutorContext, logger } from '@nrwl/devkit';
import { prompt } from 'enquirer';
import {
  ExecutorResult,
  expandEnvironmentVariables,
  generateSecret,
  isEnvironmentVariableSet,
  setEnvironmentVariable,
} from '../../utils';
import { normalizeOptions } from './normalize-options';
import { ConfigureExecutorSchema, VariableDefinition } from './schema';

export function createPrompt(context: ExecutorContext, variable: VariableDefinition): any {
  const base = {
    type: 'input',
    name: variable.name,
    message: `${variable.description}\n${variable.name}`,
    required: !variable.optional,
    initial: expandEnvironmentVariables(variable.defaultValue),
  };

  switch (variable.type) {
    default:
      return base;
    case 'password':
      return {
        ...base,
        message: `${base.message} (leave empty to generate)`,
        required: false,
        result: async (value?: string) => value?.trim() || (await generateSecret(context)),
      };
    case 'generated':
      return {
        ...base,
        skip: true,
        required: false,
        result: async _ => await generateSecret(context),
      };
  }
}

export default async function runExecutor(
  schema: ConfigureExecutorSchema,
  context: ExecutorContext
): Promise<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  if (options.variables.length === 0) {
    logger.debug(`The project ${context.projectName} does not contain any variables that need to be configured.`);
    return { success: true };
  }

  const variablesToProcess = [];

  for (const variable of options.variables) {
    if (isEnvironmentVariableSet(variable.name)) {
      logger.debug(`Skipping variable ${variable.name} because it is already configured.`);
      continue;
    }

    variablesToProcess.push(variable);
  }

  if (variablesToProcess.length === 0) {
    return { success: true };
  }

  logger.info(`Answer the following questions to configure the project ${context.projectName}:`);

  for (const variable of variablesToProcess) {
    const values = await prompt(createPrompt(context, variable));
    await setEnvironmentVariable(context, variable.name, values[variable.name]);
  }

  return { success: true };
}
