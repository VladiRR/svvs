import {ICookieServiceOption} from './cookie-service-option.interface'

export abstract class ICookieService {

  /**
   * Check
   *
   * @param name Cookie name
   *
   */
  abstract check(name: string): boolean

  /**
   * Get
   *
   * @param name Cookie name
   */
  abstract get(name: string): string

  /**
   * get All
   */
  abstract getAll(): { [key: string]: string }

  /**
   * all set => original
   *
   * @param name Name
   * @param value Value
   * @param options Cookies options
   *
   */
  abstract put(
    name: string,
    value: string,
    options: Partial<ICookieServiceOption>,
  ): void


  /**
   * delete => original
   *
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  abstract remove(
    name: string,
    path?: string,
    domain?: string,
  ): void

  /**
   * delete => original
   *
   * @param path   Cookie path
   * @param domain Cookie domain
   */
  abstract removeAll(
    path?: string,
    domain?: string): void
}
