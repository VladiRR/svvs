import {IMemoryStorage} from '@svvs/shared/utils/interfaces'
import {Injectable} from '@angular/core'

@Injectable()
export class BaseMemoryStorage implements IMemoryStorage {
  /**
   * Storage data
   * @private
   */
  private data: {[key: string]: string} = {}

  get length(): number {
    return Object.keys(this.data).length
  }

  clear(): void {
    this.data = {}
  }

  getItem(key: string): string | null {
    return key in this.data ? this.data[key] : null
  }

  key(index: number): string | null {
    const keys = Object.keys(this.data)

    return index >=0 && index<= keys.length ? keys[index] : null
  }

  removeItem(key: string): void {
    delete this.data[key]
  }

  setItem(key: string, value: string): void {
    this.data[key]= value
  }
}
