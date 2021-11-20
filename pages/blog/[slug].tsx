/* eslint-disable rules/export-name-validation */
import { backendTranslationGetDefinitions } from 'backend/translation/get-definitions';
import { GetStaticPaths } from 'next';
import { BlogContentView } from 'views/blog/content.view';

export const getStaticProps = async ({ locale }: { locale: string }): Promise<{ props: unknown }> => {
  return {
    props: { ...(await backendTranslationGetDefinitions(locale)) },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { slug: 'asd' }, locale: 'tr' },
      { params: { slug: 'asd' }, locale: 'en-US' },
      { params: { slug: 'wqe' }, locale: 'tr' },
    ],
    fallback: true,
  };
};

export default BlogContentView;
