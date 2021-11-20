import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export class ApiFactory {
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
        .request(config)
        .then((response) => resolve(response.data))
        .catch(reject);
    });
  }
}
