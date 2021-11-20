import { ApiFactory } from './factory';
import { ApiMakeFactoryPropsInterface } from './make-factory.props.interface';

export const ApiMakeFactory = (options: ApiMakeFactoryPropsInterface): ApiFactory =>
  new ApiFactory({
    baseURL: options.getOrigin(),
  });
