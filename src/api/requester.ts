import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponseTransformer } from 'axios';

export class ApiRequester {
  /**
   * axios instance
   */
  private instance: AxiosInstance;

  constructor({ baseURL }: { baseURL: string }) {
    this.instance = axios.create({ baseURL });
  }

  /**
   * performs request
   */
  public request<T>(config: AxiosRequestConfig): Promise<T | AxiosError> {
    return new Promise((resolve, reject) => {
      this.instance
        .request({
          ...config,
          transformResponse: [
            ...(axios.defaults.transformResponse as AxiosResponseTransformer[]),
            config.transformResponse as AxiosResponseTransformer,
          ],
        })
        .then((response) => resolve(response.data))
        .catch(reject);
    });
  }
}
