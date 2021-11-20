export const localeGetAlternative = (active?: string, locales: string[] = []): string =>
  locales.find((locale) => locale !== active) || 'en-US';
