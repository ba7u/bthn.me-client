/* eslint-disable @typescript-eslint/no-var-requires */

import '@testing-library/jest-dom';
import { NextRouter } from 'next/router';
import { TFunctionType } from 'types/t-function/type';
import { translationsMap } from './misc/add-translation.mock';

if (!global.window) {
  (global as unknown as { window: Window }).window = global as unknown as Window;
}

jest.mock('next-i18next/serverSideTranslations', () => ({
  serverSideTranslations: (): Promise<{ _nextI18Next: null }> => Promise.resolve({ _nextI18Next: null }),
}));

jest.mock('next-i18next', () => ({
  useTranslation: (): {
    t: TFunctionType;
    i18n: {
      exists: (key: string) => boolean;
    };
  } => ({
    t: (key, options): string => {
      return typeof options !== 'string' && typeof options?.count !== 'undefined'
        ? (translationsMap[`${key}${options.count > 1 ? '_plural' : ''}`] || translationsMap[key] || key).replace(
            '{{count}}',
            options.count.toString()
          )
        : translationsMap[key] || key;
    },
    i18n: {
      exists: (key: string): boolean => !!translationsMap[key],
    },
  }),
}));

const router = {
  events: { on: jest.fn(), off: jest.fn() },
  locale: 'en',
  pathname: '/',
  asPath: '/page',
  push: jest.fn(),
} as unknown as NextRouter;

jest.mock('next/router', () => ({
  useRouter: (): NextRouter => router,
}));

global.origin = 'default-origin';
(global as unknown as { snowplow: Function }).snowplow = jest.fn();

// We do not want anything random in the tests
jest.spyOn(Math, 'random').mockReturnValue(0.2);
