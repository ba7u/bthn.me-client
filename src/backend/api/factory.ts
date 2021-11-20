import { ApiMakeFactory } from 'api/make-factory';

export const ApiFactory = () =>
  ApiMakeFactory({
    getOrigin: () => process.env.STRAPI_URL as string,
  });
