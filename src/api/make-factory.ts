import { ApiRequester } from './requester';
import { ApiMakeFactoryPropsInterface } from './make-factory.props.interface';

export const ApiMakeFactory = (options: ApiMakeFactoryPropsInterface): ApiRequester =>
  new ApiRequester({
    baseURL: options.getOrigin(),
  });
