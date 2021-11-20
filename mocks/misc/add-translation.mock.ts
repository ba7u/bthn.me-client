// eslint-disable-next-line rules/export-name-validation
export const translationsMap: Record<string, string> = {};

export const mockMiscAddTranslation = (key: string, translation: string): void => {
  translationsMap[key] = translation;
};
