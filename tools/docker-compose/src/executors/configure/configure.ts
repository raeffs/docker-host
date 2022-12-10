import { ExecutorContext, logger } from '@nrwl/devkit';
import { prompt } from 'enquirer';
import { ExecutorResult, isEnvironmentVariableSet, setEnvironmentVariable } from '../../utils';
import { normalizeOptions } from './normalize-options';
import { ConfigureExecutorSchema } from './schema';

export default async function runExecutor(
  schema: ConfigureExecutorSchema,
  context: ExecutorContext
): Promise<ExecutorResult> {
  const options = normalizeOptions(schema, context);

  if (options.variables.length === 0) {
    logger.debug(`The project ${context.projectName} does not contain any variables that need to be configured.`);
    return { success: true };
  }

  const prompts = [];

  for (const variable of options.variables) {
    if (isEnvironmentVariableSet(variable.name)) {
      logger.debug(`Skipping variable ${variable.name} because it is already configured.`);
      continue;
    }

    prompts.push({
      type: 'input',
      name: variable.name,
      message: `${variable.description}\n${variable.name}`,
      required: true,
    });
  }

  if (prompts.length === 0) {
    return { success: true };
  }

  logger.info(`Answer the following questions to configure the project ${context.projectName}:`);

  const values = await prompt(prompts);
  for (const key of Object.keys(values)) {
    await setEnvironmentVariable(context, key, values[key]);
  }

  return { success: true };
}
