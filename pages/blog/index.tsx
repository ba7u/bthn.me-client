import { ApiStrapiRequest } from 'backend/api/strapi/article/request';
import { backendTranslationGetDefinitions } from 'backend/translation/get-definitions';
import { BlogView } from 'views/blog/view';

export const getStaticProps = async ({ locale }: { locale: string }): Promise<{ props: unknown }> => {
  const sample = await ApiStrapiRequest({
    query: {
      id: '618d80573f9585175432aa26',
    },
  });

  console.info(sample, ' < sample');

  return {
    props: { ...(await backendTranslationGetDefinitions(locale)) },
  };
};

export default BlogView;
