/* eslint-disable rules/export-name-validation */
import { backendTranslationGetDefinitions } from 'backend/translation/get-definitions';
import { CvView } from 'views/cv/view';

export const getStaticProps = async ({ locale }: { locale: string }): Promise<{ props: unknown }> => {
  return {
    props: { ...(await backendTranslationGetDefinitions(locale)) },
  };
};

export default CvView;
