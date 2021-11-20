import { TOptions } from 'i18next';

export type TFunctionType = (key: string, options?: string | TOptions, allowManyContext?: boolean) => string;
