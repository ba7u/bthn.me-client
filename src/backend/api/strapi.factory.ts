import { ApiMakeFactory } from 'api/make-factory';

export const ApiStrapiFactory = () =>
  ApiMakeFactory({
    getOrigin: () => process.env.STRAPI_URL as string,
  });
