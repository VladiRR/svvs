import {Inject, Injectable, PLATFORM_ID} from '@angular/core'

import {ISessionStorage} from '@svvs/shared/utils/interfaces'
import {BaseMemoryStorage} from './base-memory.storage'
import {storageAvailable} from '../utils/storage.util'

@Injectable()
export class BaseSessionStorage implements ISessionStorage {
  /**
   * Browser session storage
   * @private
   */
  private readonly storage: Storage

constructor(
  private memoryStorage: BaseMemoryStorage,
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Inject(PLATFORM_ID) private platformId: Object
) {
    if (storageAvailable('sessionStorage')) {
      this.storage = window.sessionStorage
    } else {
      this.storage = this.memoryStorage
    }
}

  get length(): number {
    return this.storage.length
  }

  clear(): void {
    this.storage.clear()
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index)
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value)
  }
}
