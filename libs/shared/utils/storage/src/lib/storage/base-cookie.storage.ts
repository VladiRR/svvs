import {Injectable} from '@angular/core'
import {ICookieServiceOption, ICookieStorage} from '@svvs/shared/utils/interfaces'
import {BaseCookieService} from '../services/base-cookie.service'

@Injectable()
export class BaseCookieStorage implements ICookieStorage {

  constructor(private cookieService: BaseCookieService) {
  }

  get length(): number {
    return Object.keys(this.cookieService.getAll()).length
  }

  clear(): void {
    this.cookieService.removeAll()
  }

  getItem(key: string): string | null {
    const item = this.cookieService.get(key)

    return item !== null ? item : null
  }

  key(index: number): string | null {
    const keys = Object.keys(this.cookieService.getAll())

    return index >= 0 && index <= keys.length ? keys[index] : null
  }

  removeItem(key: string): void {
    this.cookieService.remove(key)
  }

  setItem(key: string, value: string, options: Partial<ICookieServiceOption> = { path: '/'}): void {
    this.cookieService.put(key, value, options)
  }
}
