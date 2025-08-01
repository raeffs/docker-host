export interface BasePromptOptions {
  name: string;
  type: string | (() => string);
  message: string | (() => string) | (() => Promise<string>);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initial?: any;
  required?: boolean;
  format?(value: string): string | Promise<string>;
  result?(value: string): string | Promise<string>;
  skip?: ((state: object) => boolean | Promise<boolean>) | boolean;
  validate?(value: string): boolean | string | Promise<boolean | string>;
}

export interface Choice {
  name: string;
  message?: string;
  value?: unknown;
  hint?: string;
  role?: string;
  enabled?: boolean;
  disabled?: boolean | string;
}

export interface ArrayPromptOptions extends BasePromptOptions {
  type: 'autocomplete' | 'editable' | 'form' | 'multiselect' | 'select' | 'survey' | 'list' | 'scale';
  choices: (string | Choice)[];
  maxChoices?: number;
  multiple?: boolean;
  initial?: number;
  delay?: number;
  separator?: boolean;
  sort?: boolean;
  linebreak?: boolean;
  edgeLength?: number;
  align?: 'left' | 'right';
  scroll?: boolean;
}

export interface BooleanPromptOptions extends BasePromptOptions {
  type: 'confirm';
  initial?: boolean;
}

export interface StringPromptOptions extends BasePromptOptions {
  type: 'input' | 'invisible' | 'list' | 'password' | 'text';
  initial?: string;
  multiline?: boolean;
}

export interface NumberPromptOptions extends BasePromptOptions {
  type: 'numeral';
  min?: number;
  max?: number;
  delay?: number;
  float?: boolean;
  round?: boolean;
  major?: number;
  minor?: number;
  initial?: number;
}

export interface SnippetPromptOptions extends BasePromptOptions {
  type: 'snippet';
  newline?: string;
  template?: string;
}

export interface SortPromptOptions extends BasePromptOptions {
  type: 'sort';
  hint?: string;
  drag?: boolean;
  numbered?: boolean;
}

export type PromptOptions =
  | BasePromptOptions
  | ArrayPromptOptions
  | BooleanPromptOptions
  | StringPromptOptions
  | NumberPromptOptions
  | SnippetPromptOptions
  | SortPromptOptions;
