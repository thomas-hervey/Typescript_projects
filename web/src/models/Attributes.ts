import { UserProps } from "./User"

export class Attributes<T> {
  constructor(private data: T) {}

  // set up a generic constraint that type K can be (only one of the keys of T)
  // then, look at the interface T, return the value at the key K
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key]
  }

  // set UserProps (any props passed in)
  set(update: T): void {
    Object.assign(this.data, update)
  }
}
