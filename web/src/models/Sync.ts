import axios, { AxiosPromise } from 'axios'

interface HasId {
  id?: number
}

export class Sync<T extends HasId> { // whatever T is, it must have an Id

  constructor(public rootURL: string) {

  }

  // fetch a given thing
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`)
  }

  // persist data for a given thing
  save(data: T): AxiosPromise {
    const { id } = data

    if (id) {
      // PUT
      return axios.put(`${this.rootURL}/${id}`, data)
    } else {
      // POST
      return axios.post(this.rootURL, data)
    }
  }
}