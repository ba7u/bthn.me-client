/* eslint-disable rules/export-name-validation */
import { backendTranslationGetDefinitions } from 'backend/translation/get-definitions';
import { BlogView } from 'views/blog/view';

export const getStaticProps = async ({ locale }: { locale: string }): Promise<{ props: unknown }> => {
  return {
    props: { ...(await backendTranslationGetDefinitions(locale)) },
  };
};

export default BlogView;
