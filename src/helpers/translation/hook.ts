// eslint-disable-next-line rules/forbid-import
import { useTranslation as i18nUseTranslation } from 'next-i18next';
import { TFunctionType } from 'types/t-function/type';

const { warn } = console;

export const useTranslation = (namespace = 'common'): { t: TFunctionType } => {
  const translations = i18nUseTranslation(namespace);

  return {
    t: (key): string => {
      if (translations.ready) {
        if (key === translations.t(key)) {
          warn(`Translation for key "${key}" not found.`);
        }

        return translations.t(key);
      }

      return '';
    },
  };
};
