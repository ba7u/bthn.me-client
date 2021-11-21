import { UrlQueryType } from 'types/url/query.type';
import { ApiStrapiFactory } from 'backend/api/strapi.factory';
import { ApiArticleTransformer } from 'backend/api/strapi/article/transformer';

const fetcher = ApiStrapiFactory();

export const ApiStrapiRequest = (options?: { query: UrlQueryType }) =>
  fetcher.request({
    method: 'GET',
    url: '/articles',
    params: options?.query,
    transformResponse: ApiArticleTransformer,
  });
