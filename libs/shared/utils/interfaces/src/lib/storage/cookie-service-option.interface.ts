/**
 *Cookie Option interface
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
 */
export interface ICookieServiceOption {
  /**
   * expires data
   */
  expires: Date
  /**
   * Domain
   */
  domain: string

  /**
   * Path
   */
  path: string

  /**
   * Secure
   */
  secure: boolean

  /**
   *  SameSite
   */
  sameSite: 'strict' | 'lax' | 'none'
}
