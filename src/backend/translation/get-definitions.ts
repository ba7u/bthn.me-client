// eslint-disable-next-line rules/forbid-import
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * @param locale lang
 * @returns the common translation definitions
 */
export const backendTranslationGetDefinitions = (locale: string): ReturnType<typeof serverSideTranslations> =>
  serverSideTranslations(locale, ['common']);
