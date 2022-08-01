import axios, { AxiosResponse } from 'axios'

export const axiosInstance = (port: number, timeout?: number) => {
  return axios.create({
    baseURL: `http://127.0.0.1:${port}/`,
    timeout: timeout ? timeout : 10000,
    headers: {
      'Content-Type': 'application/json'
    },
    proxy: false
  })
}

export class RouteHandler<T> {
  instance
  responseBody

  constructor(public url: string) {
    this.instance = axiosInstance(3000)
    this.responseBody = (response: AxiosResponse) => response.data
  }

  async getAll(): Promise<T[]> {
    return await this.instance
      .get<T>(this.url)
      .then(this.responseBody)
      .catch(({ response }) => {
        console.log('Error in getAll()')
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
      })
  }

  async getById(id: string): Promise<T> {
    return await this.instance
      .get<T>(`${this.url}/${id}`)
      .then(this.responseBody)
      .catch(({ response }) => {
        console.log('Error in getById()')
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
      })
  }

  async getByText(body: any): Promise<T[]> {
    return await this.instance
      .post<T>(`${this.url}/text`, body)
      .then(this.responseBody)
      .catch(({ response }) => {
        console.log('Error in getByText()')
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
      })
  }

  async create(body: T): Promise<T> {
    return await this.instance
      .post<T>(this.url, body)
      .then(this.responseBody)
      .catch(({ response }) => {
        console.log('Error in create()')
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
      })
  }

  async delete(id: string): Promise<T> {
    return await this.instance
      .delete<T>(`${this.url}/${id}`)
      .then(this.responseBody)
      .catch(({ response }) => {
        console.log('Error in delete()')
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
      })
  }
}
