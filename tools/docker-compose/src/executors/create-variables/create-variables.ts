import { ExecutorContext, logger } from '@nx/devkit';
import { prompt } from 'enquirer';
import {
  ExecutorResult,
  expandEnvironmentVariables,
  generateSecret,
  getDockerGroupId,
  getEnvironment,
  getHostname,
  isEnvironmentVariableSet,
  isSecretSet,
  setEnvironmentVariable,
  setSecret,
} from '../../utils';
import { normalizeOptions } from './normalize-options';
import { CreateVariablesExecutorSchema, VariableDefinition } from './schema';
import { PromptOptions } from './enquirer-definitions';

function createPrompt(context: ExecutorContext, variable: VariableDefinition): PromptOptions {
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
        result: async () => await generateSecret(context),
      };
    case 'boolean':
      return {
        ...base,
        type: 'confirm',
        required: true,
      };
    case 'docker-group':
      return {
        ...base,
        initial: async () => await getDockerGroupId(),
      };
    case 'hostname':
      return {
        ...base,
        initial: async () => await getHostname(),
      };
  }
}

function applyDefaults(options: PromptOptions): PromptOptions {
  return {
    ...options,
    skip: true,
    required: false,
    result: options.result ?? options.initial ?? getEnvironment()[options.name],
  };
}

function isVariableSet(context: ExecutorContext, variable: VariableDefinition): boolean {
  return variable.isSecret ? isSecretSet(context, variable.name) : isEnvironmentVariableSet(variable.name);
}

function setVariable(context: ExecutorContext, variable: VariableDefinition, value: string): Promise<void> {
  return variable.isSecret
    ? setSecret(context, variable.name, value)
    : setEnvironmentVariable(context, variable.name, value);
}

export default async function runExecutor(
  schema: CreateVariablesExecutorSchema,
  context: ExecutorContext
): Promise<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  if (options.variables.length === 0) {
    logger.debug(`The project ${context.projectName} does not contain any variables that need to be configured.`);
    return { success: true };
  }

  const variablesToProcess: VariableDefinition[] = [];

  for (const variable of options.variables) {
    if (isVariableSet(context, variable)) {
      logger.debug(`Skipping variable ${variable.name} because it is already configured.`);
      continue;
    }

    variablesToProcess.push(variable);
  }

  if (variablesToProcess.length === 0) {
    return { success: true };
  }

  if (variablesToProcess.some(x => x.type !== 'generated')) {
    logger.info(`Answer the following questions to configure the project ${context.projectName}:`);
  }

  const createPromptOptions = options.useDefaults
    ? (variable: VariableDefinition) => applyDefaults(createPrompt(context, variable))
    : (variable: VariableDefinition) => createPrompt(context, variable);

  for (const variable of variablesToProcess) {
    const promptOptions = createPromptOptions(variable);
    const values = await prompt(promptOptions);
    await setVariable(context, variable, values[variable.name]);
  }

  return { success: true };
}
